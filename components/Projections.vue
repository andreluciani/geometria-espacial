<script setup lang="ts">
import {
    Renderer,
    Scene,
    DirectionalLight,
    PointLight,
    OrbitControls,
    OrthographicCamera,
    Mesh,
    MeshBasicMaterial,
    MeshStandardMaterial,
    MeshLambertMaterial,
    PlaneGeometry
} from "@janvorisek/drie";
import Cube from "./projections/Cube.vue"
import { ref, Ref, onMounted } from 'vue'
import { DoubleSide } from "three";

const backWallRef = ref<Ref<typeof MeshStandardMaterial> | null>(null)
const lightRef = ref<Ref<typeof DirectionalLight> | null>(null)

onMounted(() => {
    if (backWallRef.value) {
        console.log(backWallRef.value.three)
    }
    if (lightRef.value) {
        console.log(lightRef.value.three)
    }
});

const height = ref<number>(0);

window.setInterval(() => {
    let newHeight: number = height.value;
    newHeight += 0.05
    height.value = newHeight;
}, 10);


</script>

<template>
    <div style="width: 100%; height: 90%;" border="~ main rounded-lg" overflow-hidden>
        <Renderer :antialias="true" :shadowMapEnabled="true" :alpha="false">
            <OrthographicCamera :position="[10, 10, -20]">
                <OrbitControls />
            </OrthographicCamera>
            <Scene background="#ededed">
                <DirectionalLight color="#ff0000" :position="[0, 200, 0]" :intensity="2" :cast-shadow="true" />
                <DirectionalLight color="#00ff00" :position="[0, 5, -200]" :intensity="2" :cast-shadow="true" />
                <DirectionalLight color="#0000ff" :position="[200, 5, 0]" :intensity="2" :cast-shadow="true" />
                <!-- <PointLight color="#ff0000" :position="[0, 200, 0]" :intensity="20000" :cast-shadow="true" /> -->
                <!-- <PointLight color="#00ff00" :position="[0, 12.5, -200]" :intensity="20000" :cast-shadow="true" /> -->
                <!-- <PointLight color="#0000ff" :position="[200, 12.5, 0]" :intensity="20000" :cast-shadow="true" /> -->
                <!-- Bottom Plane -->
                <Mesh :position="[0, -10, 0]" :rotation="[Math.PI / 2, 0, 0]" :receiveShadow="true">
                    <MeshLambertMaterial color="#ffffff" :side="DoubleSide" />
                    <PlaneGeometry :width="20" :height="20" />
                </Mesh>
                <!-- Back Plane -->
                <Mesh :position="[0, 0, 10]" :rotation="[0, 0, Math.PI]" :receiveShadow="true">
                    <MeshLambertMaterial color="#ffffff" :side="DoubleSide" />
                    <PlaneGeometry :width="20" :height="20" />
                </Mesh>
                <!-- Right Plane -->
                <Mesh :position="[-10, 0, 0]" :rotation="[0, Math.PI / 2, 0]" :receiveShadow="true">
                    <MeshStandardMaterial color="#ffffff" :side="DoubleSide" />
                    <PlaneGeometry :width="20" :height="20" />
                </Mesh>
                <Cube :position="[0, 0, 0]" />
            </Scene>
        </Renderer>
    </div>
</template>

