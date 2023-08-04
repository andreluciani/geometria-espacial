<script setup lang="ts">
import { Renderer, Scene } from "@janvorisek/drie";
import {
    ConeGeometry,
    Mesh, MeshBasicMaterial,
    BoxGeometry,
    PlaneGeometry,
    CylinderGeometry,
    AmbientLight,
    LineBasicMaterial,
    OrthographicCamera,
    OrbitControls,
    EdgesGeometry,
    LineSegments,
    Group
} from "@janvorisek/drie";
import Cube from "./platonic/Cube.vue"
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
    <div style="width: 100%; height: 100%;" border="~ main rounded-lg" overflow-hidden>
        <Renderer :antialias="true">
            <OrthographicCamera :position="[40, 100, 120]" :lookAt="[0, 0, 0]">
                <OrbitControls />
            </OrthographicCamera>
            <Cube />
        </Renderer>
    </div>
</template>

