<script setup lang="ts">
import { Scene } from "@janvorisek/drie";
import {
    Mesh,
    MeshLambertMaterial,
    BoxGeometry,
    DirectionalLight,
    LineBasicMaterial,
    EdgesGeometry,
    LineSegments,
} from "@janvorisek/drie";
import { ref } from "vue"

const rot = ref<[number, number, number]>([0, 0, 0]);

window.setInterval(() => {
    const newAngle: [number, number, number] = [...rot.value];
    newAngle[1] = newAngle[1] - 0.005
    newAngle[2] = newAngle[2] - 0.002
    rot.value = newAngle;
}, 10);

</script>

<template>
    <Scene background="#444444">
        <DirectionalLight :position="[0, 200, 0]" :intensity="3" />
        <DirectionalLight :position="[100, 200, 100]" :intensity="3" />
        <DirectionalLight :position="[-100, -200, -100]" :intensity="3" />
        <!-- Cube -->
        <Mesh :position="[0, 0, 0]" :rotation="rot">
            <MeshLambertMaterial color="#f04848" :transparent="true" :opacity="0.8" />
            <BoxGeometry name="cube" :width="5" :height="5" :depth="5" :widthSegments="1" :heightSegments="1"
                :depthSegments="1" />
        </Mesh>
        <LineSegments :position="[0, 0, 0]" :rotation="rot">
            <LineBasicMaterial :color="0x000000" :transparent="true" :opacity="0.5" />
            <EdgesGeometry geometry="cube" />
        </LineSegments>
    </Scene>
</template>

