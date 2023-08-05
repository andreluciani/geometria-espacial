<script setup lang="ts">
import {
    Renderer,
    Scene,
    DirectionalLight,
    OrbitControls,
    OrthographicCamera,
    Mesh,
    MeshLambertMaterial,
    MeshBasicMaterial
} from "@janvorisek/drie";
import { ref, Ref, onMounted } from 'vue'
import { Color, Float32BufferAttribute } from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

const rot = ref<Array<number>>([0, 0, 0]);

window.setInterval(() => {
    const newAngle: Array<number> = [...rot.value];
    newAngle[0] = newAngle[0] - 0.001
    newAngle[1] = newAngle[1] - 0.002
    newAngle[2] = newAngle[2] - 0.001
    rot.value = newAngle;
}, 10);

const mesh = ref<Ref<typeof Mesh> | null>(null);

onMounted(() => {
    if (!mesh.value) {
        return
    }
    const roundedBoxGeometry = new RoundedBoxGeometry(10, 10, 10, 2, 1)
    const positionAttribute = roundedBoxGeometry.getAttribute('position');
    const colors: number[] = [];
    const color = new Color();
    let trianglesCount: number = 0
    for (let i = 0; i < positionAttribute.count; i += 3) {
        color.set(0x000000);
        if (23 < trianglesCount && trianglesCount <= 25) {
            color.set(0x3bd7d0); // right
        } else if (73 < trianglesCount && trianglesCount <= 75) {
            color.set(0x3bd7d0); // back right
        } else if (123 < trianglesCount && trianglesCount <= 125) {
            color.set(0x229bc3); // top
        } else if (173 < trianglesCount && trianglesCount <= 175) {
            color.set(0x229bc3); // bottom
        } else if (223 < trianglesCount && trianglesCount <= 225) {
            color.set(0x0c666c); // back left
        } else if (273 < trianglesCount && trianglesCount <= 275) {
            color.set(0x0c666c); // left
        }
        colors.push(color.r, color.g, color.b);
        colors.push(color.r, color.g, color.b);
        colors.push(color.r, color.g, color.b);
        trianglesCount += 1
    }
    roundedBoxGeometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
    const newThreeProxy = new Proxy(roundedBoxGeometry, {})
    mesh.value.three.geometry = newThreeProxy
    mesh.value.three.material.vertexColors = true
});
</script>

<template>
    <div class="h-50 w-50 m-auto">
        <Renderer :antialias="true" :shadowMapEnabled="true" :alpha="false">
            <OrthographicCamera :position="[10, 10, -10]">
                <OrbitControls />
            </OrthographicCamera>
            <Scene background="#ffffff">
                <DirectionalLight color="#ffffff" :position="[0, 200, 0]" :intensity="3" :cast-shadow="true" />
                <DirectionalLight color="#ffffff" :position="[0, 0, -200]" :intensity="3" :cast-shadow="true" />
                <DirectionalLight color="#ffffff" :position="[200, 0, 0]" :intensity="3" :cast-shadow="true" />
                <!-- Cube -->
                <Mesh ref="mesh" :position="[0, 0, 0]" :rotation="rot" :castShadow="true">
                    <MeshLambertMaterial color="#ffffff" />
                </Mesh>
            </Scene>
        </Renderer>
    </div>
</template>

