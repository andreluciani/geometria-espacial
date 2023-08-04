<script setup lang="ts">
import {
    Mesh,
    MeshLambertMaterial,
    BoxGeometry,
    LineBasicMaterial,
    EdgesGeometry,
    LineSegments,
} from "@janvorisek/drie";
import { ref } from "vue"

const props = defineProps({
    position: {
        type: Array,
        required: true
    },
    initialRotation: {
        type: Array<number>,
        required: false,
        default: () => [0, 0, 0]
    }
})

const rot = ref<Array<number>>(props.initialRotation);

window.setInterval(() => {
    const newAngle: Array<number> = [...rot.value];
    newAngle[1] = newAngle[1] - 0.005
    newAngle[2] = newAngle[2] - 0.002
    rot.value = newAngle;
}, 10);

</script>

<template>
    <!-- Cube -->
    <Mesh :position="props.position" :rotation="rot">
        <MeshLambertMaterial color="#f04848" :transparent="true" :opacity="0.8" />
        <BoxGeometry name="cube" :width="5" :height="5" :depth="5" :widthSegments="1" :heightSegments="1"
            :depthSegments="1" />
    </Mesh>
    <LineSegments :position="props.position" :rotation="rot">
        <LineBasicMaterial :color="0x000000" :transparent="true" :opacity="0.5" />
        <EdgesGeometry geometry="cube" />
    </LineSegments>
</template>

