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

const downPosition = [...props.position]
downPosition[1] = -3

const rot = ref<Array<number>>(props.initialRotation);
const downRot = ref<Array<number>>(props.initialRotation);
const zRotation: Array<number> = [...downRot.value]
zRotation[2] = Math.PI
downRot.value = zRotation

window.setInterval(() => {
    const newAngle: Array<number> = [...rot.value];
    newAngle[1] = newAngle[1] - 0.002
    rot.value = newAngle;
    const newDownAngle: Array<number> = [...downRot.value];
    newDownAngle[1] = newDownAngle[1] - 0.002
    downRot.value = newDownAngle;
}, 10);

</script>

<template>
    <!-- Octahedron -->
    <Mesh :position="props.position" :rotation="rot">
        <MeshLambertMaterial color="#06d6a0" />
        <ConeGeometry name="octahedron" :radius="3" :height="3" :radialSegments="4" :openEnded="true" />
    </Mesh>
    <LineSegments :position="props.position" :rotation="rot">
        <LineBasicMaterial :color="0x000000" />
        <EdgesGeometry geometry="octahedron" />
    </LineSegments>
    <Mesh :position="downPosition" :rotation="downRot">
        <MeshLambertMaterial color="#06d6a0" />
        <ConeGeometry name="octahedron-down" :radius="3" :height="3" :radialSegments="4" :openEnded="true" />
    </Mesh>
    <LineSegments :position="downPosition" :rotation="downRot">
        <LineBasicMaterial :color="0x000000" />
        <EdgesGeometry geometry="octahedron-down" />
    </LineSegments>
</template>

