<script setup lang="ts">
import {
    Mesh,
    MeshLambertMaterial,
    ConeGeometry,
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
    newAngle[1] = newAngle[1] - 0.002
    rot.value = newAngle;
}, 10);

</script>

<template>
    <!-- Tetahedron -->
    <Mesh :position="props.position" :rotation="rot">
        <MeshLambertMaterial color="#f04848" />
        <ConeGeometry name="tetahedron" :radius="10/3" :height="5" :radialSegments="3" />
    </Mesh>
    <LineSegments :position="props.position" :rotation="rot">
        <LineBasicMaterial :color="0x000000" />
        <EdgesGeometry geometry="tetahedron" />
    </LineSegments>
</template>

