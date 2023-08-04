<script setup lang="ts">
import { Renderer, Scene } from "@janvorisek/drie";
import {
    ConeGeometry,
    Mesh, MeshBasicMaterial,
    BoxGeometry,
    PlaneGeometry,
    CylinderGeometry,
    AmbientLight,
    PerspectiveCamera,
    OrthographicCamera,
    OrbitControls,
    EdgesGeometry,
    LineSegments,
    Group
} from "@janvorisek/drie";
import Cube from "./platonic/Cube.vue"
import { ref, Ref, onMounted } from 'vue'
import { Fog } from "three";

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
            <PerspectiveCamera :position="[5,5,5]" :near="0.1" :far="1000">
                <OrbitControls />
            </PerspectiveCamera>
            <Cube />
        </Renderer>
    </div>
</template>

