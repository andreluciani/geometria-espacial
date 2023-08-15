<script setup lang="ts">
import {
    Renderer,
    Scene,
    OrthographicCamera,
    OrbitControls,
    AmbientLight,
    MeshLambertMaterial,
    PlaneGeometry,
    Mesh,
    MeshBasicMaterial,
    LineBasicMaterial,
    EdgesGeometry,
    LineSegments,
    BufferGeometry,
} from "@janvorisek/drie";
import { DoubleSide } from "three";

const props = defineProps({
    position: {
        type: Array,
        required: true
    }
})

const vertices = [
    3, 0, 0, // 0
    1, 0, 4, // 1
    -3, 0, 2, // 2
    3, 3, 0, // 3
    1, 5, 4, // 4
    -3, 4, 2, // 5

]
const faces = [
    0, 1, 2, // base
    0, 1, 4, 4, 3, 0,// face 1
    1, 2, 5, 5, 4, 1,// face 2
    2, 0, 5, 5, 0, 3,// face 3
    3, 4, 5, // top
]

</script>

<template>
    <div style="width: 100%; height: 100%;" border="~ main rounded-lg" overflow-hidden>
        <Renderer :antialias="true" :shadowMapEnabled="true" :alpha="false">
            <OrthographicCamera :position="[10, 10, 0]">
                <OrbitControls />
            </OrthographicCamera>
            <Scene background="#ededed">
                <AmbientLight :position="[0, 4, 4]" :intensity="1" />
                <!-- Bottom Plane -->
                <Mesh :position="[0, -0.1, 0]" :rotation="[Math.PI / 2, 0, 0]" :receiveShadow="true">
                    <MeshLambertMaterial color="#ffffff" :side="DoubleSide" />
                    <PlaneGeometry :width="20" :height="20" />
                </Mesh>
                <!-- Truncated Prism -->
                <Mesh :position="props.position">
                    <MeshBasicMaterial color="#ffffff" :side="DoubleSide" :transparent="true" :opacity="0.3" />
                    <BufferGeometry name="truncated-prism" :vertices="vertices" :faces="faces" />
                </Mesh>
                <LineSegments :position="props.position">
                    <LineBasicMaterial :color="0x000000" />
                    <EdgesGeometry geometry="truncated-prism" />
                </LineSegments>
            </Scene>
        </Renderer>
    </div>
</template>

