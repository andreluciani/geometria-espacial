<script setup lang="ts">
import {
    Renderer,
    Scene,
    DirectionalLight,
    OrbitControls,
    OrthographicCamera
} from "@janvorisek/drie";
import Cube from "./platonic/Cube.vue"
import Tetahedron from "./platonic/Tetahedron.vue"
import Octahedron from "./platonic/Octahedron.vue"
import Dodecahedron from "./platonic/Dodecahedron.vue"
import Icosahedron from "./platonic/Icosahedron.vue"

</script>

<template>
    <div style="width: 100%; height: 90%;" border="~ main rounded-lg" overflow-hidden>
        <Renderer :antialias="true">
            <OrthographicCamera :position="[12, 10, -20]" :near="0.1" :far="1000" :up="[0.0, 1, 0]">
                <OrbitControls />
            </OrthographicCamera>
            <Scene background="#ededed">
                <DirectionalLight :position="[0, 200, 0]" :intensity="3" />
                <DirectionalLight :position="[100, 200, 100]" :intensity="3" />
                <DirectionalLight :position="[-100, -200, -100]" :intensity="3" />
                <Tetahedron :position="[20, -1.5, 0]" />
                <Cube :position="[10, -1.5, 0]" />
                <Octahedron :position="[0, 0, 0]" />
                <Dodecahedron :position="[-10, -1.5, 0]" />
                <Icosahedron :position="[-20, -1.5, 0]" />
            </Scene>
        </Renderer>
    </div>
</template>

