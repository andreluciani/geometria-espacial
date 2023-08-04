<script setup lang="ts">
import {
    Renderer,
    Scene,
    PerspectiveCamera,
    DirectionalLight,
    OrbitControls,
} from "@janvorisek/drie";
import Cube from "./platonic/Cube.vue"
import Tetahedron from "./platonic/Tetahedron.vue"
import Octahedron from "./platonic/Octahedron.vue"
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
            <PerspectiveCamera :position="[5, 12, -25]" :near="0.1" :far="1000">
                <OrbitControls />
            </PerspectiveCamera>
            <Scene background="#444444">
                <DirectionalLight :position="[0, 200, 0]" :intensity="3" />
                <DirectionalLight :position="[100, 200, 100]" :intensity="3" />
                <DirectionalLight :position="[-100, -200, -100]" :intensity="3" />
                <Cube :position="[0, -1.5, 0]" />
                <Tetahedron :position="[10, -1.5, 0]" />
                <Octahedron :position="[-10, 0, 0]" />
            </Scene>
        </Renderer>
    </div>
</template>

