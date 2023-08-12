<script setup lang="ts">
import {
    Mesh,
    MeshBasicMaterial,
    BufferGeometry,
    LineBasicMaterial,
    EdgesGeometry,
    LineSegments,
    GridHelper,
} from "@janvorisek/drie";
import { ref } from "vue"
import { DoubleSide } from "three";
import { generatePrism } from "../../utils";

const props = defineProps({
    position: {
        type: Array,
        required: true
    },
    plan: {
        type: Boolean,
        required: false,
        default: () => false
    },
    resetPlan: {
        type: Boolean,
        required: false,
        default: () => false
    }
})

const theta = Math.PI / 2 // -> make reactive!
const thirty = Math.PI / 6
const fourtyFive = Math.PI / 4
const sixty = Math.PI / 3


const triangularPrismFaces = [
    {
        // base
        vertices: [-1, 0, -Math.sqrt(3) / 3, 1, 0, -Math.sqrt(3) / 3, 0, 0, 2 * Math.sqrt(3) / 3],
        faces: [0, 1, 2],
        rotation: [0, 0, 0]
    },
    {
        // face 1
        vertices: [-1, 0, 0, 1, 0, 0, 1, 2, 0, -1, 2, 0],
        faces: [0, 1, 2, 2, 3, 0],
        rotation: [-theta, 0, 0]
    },
    {
        // face 2
        vertices: [
            -1, 0, -Math.sqrt(3) / 3, // 0
            0, 0, 2 * Math.sqrt(3) / 3, // 1
            -1 - 2 * Math.sin(theta) * Math.cos(thirty), 2 * Math.cos(theta), -Math.sqrt(3) / 3 + 2 * Math.sin(theta) * Math.sin(thirty), // 2
            -2 * Math.sin(theta) * Math.cos(thirty), 2 * Math.cos(theta), 2 * Math.sqrt(3) / 3 + 2 * Math.sin(theta) * Math.sin(thirty), //3
        ],
        faces: [0, 1, 3, 3, 2, 0],
        rotation: [0, 0, 0]
    },
    {
        // face 3
        vertices: [
            1, 0, -Math.sqrt(3) / 3, // 0
            0, 0, 2 * Math.sqrt(3) / 3, // 1
            1 + 2 * Math.sin(theta) * Math.cos(thirty), 2 * Math.cos(theta), -Math.sqrt(3) / 3 + 2 * Math.sin(theta) * Math.sin(thirty), // 2
            2 * Math.sin(theta) * Math.cos(thirty), 2 * Math.cos(theta), 2 * Math.sqrt(3) / 3 + 2 * Math.sin(theta) * Math.sin(thirty), // 3
        ],
        faces: [0, 1, 3, 3, 2, 0],
        rotation: [0, 0, 0]
    },
    {
        vertices: [0, 0, 0],
        faces: [0, 0, 0],
        rotation: [0, 0, 0]
    }, // top
]
const faceRotation = ref<Array<number>>([0, 0, 0]);
const topRotation = ref<Array<number>>([0, 0, 0]);

window.setInterval(() => {
    const newAngle: Array<number> = [...faceRotation.value];
    if (props.plan) {
        newAngle[0] = newAngle[0] - 0.002
    }
    if (props.resetPlan) {
        newAngle[0] = 0
        newAngle[1] = 0
        newAngle[2] = 0
    }
    faceRotation.value = newAngle;
}, 10);

</script>

<template>
    <!-- Right Triangular - base -->
    <Mesh :position="[0, 0, 0]" :rotation="triangularPrismFaces[0].rotation">
        <MeshBasicMaterial color="#118ab2" :side="DoubleSide" :transparent="true" :opacity="0.8" />
        <BufferGeometry name="right-triangular-base" :vertices="triangularPrismFaces[0].vertices"
            :faces="triangularPrismFaces[0].faces" />
        <GridHelper :size="10" :divisions="10" />
    </Mesh>
    <LineSegments :position="[0, 0, 0]" :rotation="triangularPrismFaces[0].rotation">
        <LineBasicMaterial color="black" />
        <EdgesGeometry geometry="right-triangular-base" />
    </LineSegments>
    <!-- Right Triangular - face 1 -->
    <Mesh :position="[0, 0, -(Math.sqrt(3) / 3)]" :rotation="triangularPrismFaces[1].rotation">
        <MeshBasicMaterial color="#118ab2" :side="DoubleSide" :transparent="true" :opacity="0.8" />
        <BufferGeometry name="right-triangular-face-1" :vertices="triangularPrismFaces[1].vertices"
            :faces="triangularPrismFaces[1].faces" />
    </Mesh>
    <LineSegments :position="[0, 0, -(Math.sqrt(3) / 3)]" :rotation="triangularPrismFaces[1].rotation">
        <LineBasicMaterial color="black" />
        <EdgesGeometry geometry="right-triangular-face-1" />
    </LineSegments>
    <!-- Right Triangular - face 2 -->
    <Mesh :position="[0, 0, 0]" :rotation="triangularPrismFaces[2].rotation">
        <MeshBasicMaterial color="#118ab2" :side="DoubleSide" :transparent="true" :opacity="0.8" />
        <BufferGeometry name="right-triangular-face-2" :vertices="triangularPrismFaces[2].vertices"
            :faces="triangularPrismFaces[2].faces" />
    </Mesh>
    <LineSegments :position="[0, 0, 0]" :rotation="triangularPrismFaces[2].rotation">
        <LineBasicMaterial color="black" />
        <EdgesGeometry geometry="right-triangular-face-2" />
    </LineSegments>
    <!-- Right Triangular - face 3 -->
    <Mesh :position="[0, 0, 0]" :rotation="triangularPrismFaces[3].rotation">
        <MeshBasicMaterial color="#118ab2" :side="DoubleSide" :transparent="true" :opacity="0.8" />
        <BufferGeometry name="right-triangular-face-3" :vertices="triangularPrismFaces[3].vertices"
            :faces="triangularPrismFaces[3].faces" />
    </Mesh>
    <LineSegments :position="[0, 0, 0]" :rotation="triangularPrismFaces[3].rotation">
        <LineBasicMaterial color="black" />
        <EdgesGeometry geometry="right-triangular-face-3" />
    </LineSegments>
</template>

