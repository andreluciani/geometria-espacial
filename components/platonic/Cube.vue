<script setup lang="ts">
import { Scene } from "@janvorisek/drie";
import {
    ConeGeometry,
    Mesh, MeshBasicMaterial,
    BoxGeometry,
    PlaneGeometry,
    CylinderGeometry,
    AmbientLight,
    LineBasicMaterial,
    EdgesGeometry,
    LineSegments,
    Group
} from "@janvorisek/drie";
import { ref, Ref, onMounted } from 'vue'
import { DoubleSide } from "three";
import { Fog } from "three";

const rot = ref<[number, number, number]>([0, 0, 0]);
const sceneRef = ref<Ref<typeof Scene> | null>(null)

onMounted(() => {
    if (sceneRef.value) {
        sceneRef.value.three.fog = new Fog(0x0c6987, 150, 300);
    }
});

</script>

<template>
    <Scene ref="sceneRef" background="#ededed">
        <AmbientLight :position="[0, 0, 0]" :intensity="1" />
        <!-- Prism -->
        <Mesh :position="[0, 0, 0]" :rotation="rot">
            <MeshBasicMaterial color="#118ab2" :transparent="true" :opacity="0.8" />
            <BoxGeometry name="prism" :width="5" :height="5" :depth="5" :widthSegments="1" :heightSegments="1"
                :depthSegments="1" />
        </Mesh>
        <LineSegments :position="[0, 0, 0]" :rotation="rot">
            <LineBasicMaterial color="black" />
            <EdgesGeometry geometry="prism" />
        </LineSegments>
    </Scene>
</template>

