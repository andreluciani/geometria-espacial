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
import { ref, reactive, computed, toRefs } from "vue"
import { DoubleSide } from "three";

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
    },
    facesRotation: {
        type: Number,
        required: false,
        default: () => 0
    },
    topRotation: {
        type: Number,
        required: false,
        default: () => 0
    },
})

const facesRotation = ref<number>(props.facesRotation);
const thirty = Math.PI / 6

const initialSetup = [
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
        rotation: [-facesRotation.value, 0, 0]
    },
    {
        // face 2
        vertices: [
            -1, 0, -Math.sqrt(3) / 3, // 0
            0, 0, 2 * Math.sqrt(3) / 3, // 1
            -1 - 2 * Math.sin(facesRotation.value) * Math.cos(thirty), 2 * Math.cos(facesRotation.value), -Math.sqrt(3) / 3 + 2 * Math.sin(facesRotation.value) * Math.sin(thirty), // 2
            -2 * Math.sin(facesRotation.value) * Math.cos(thirty), 2 * Math.cos(facesRotation.value), 2 * Math.sqrt(3) / 3 + 2 * Math.sin(facesRotation.value) * Math.sin(thirty), //3
        ],
        faces: [0, 1, 3, 3, 2, 0],
        rotation: [0, 0, 0]
    },
    {
        // face 3
        vertices: [
            1, 0, -Math.sqrt(3) / 3, // 0
            0, 0, 2 * Math.sqrt(3) / 3, // 1
            1 + 2 * Math.sin(facesRotation.value) * Math.cos(thirty), 2 * Math.cos(facesRotation.value), -Math.sqrt(3) / 3 + 2 * Math.sin(facesRotation.value) * Math.sin(thirty), // 2
            2 * Math.sin(facesRotation.value) * Math.cos(thirty), 2 * Math.cos(facesRotation.value), 2 * Math.sqrt(3) / 3 + 2 * Math.sin(facesRotation.value) * Math.sin(thirty), // 3
        ],
        faces: [0, 1, 3, 3, 2, 0],
        rotation: [0, 0, 0]
    },
    {
        // top
        vertices: [-1, 2, -Math.sqrt(3) / 3, 1, 2, -Math.sqrt(3) / 3, 0, 2, 2 * Math.sqrt(3) / 3],
        faces: [0, 1, 2],
        rotation: [0, 0, 0]
    },
]

const faces = ref<Array<{ vertices: Array<number>, faces: Array<number>, rotation: Array<number> }>>(initialSetup);


window.setInterval(() => {
    let newAngle = facesRotation.value + Math.PI / 100
    if (props.resetPlan) {
        newAngle = 0
    }
    facesRotation.value = Math.min(newAngle, Math.PI / 2)
    const newSetup = [
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
            rotation: [-newAngle, 0, 0]
        },
        {
            // face 2
            vertices: [
                -1, 0, -Math.sqrt(3) / 3, // 0
                0, 0, 2 * Math.sqrt(3) / 3, // 1
                -1 - 2 * Math.sin(newAngle) * Math.cos(thirty), 2 * Math.cos(newAngle), -Math.sqrt(3) / 3 + 2 * Math.sin(newAngle) * Math.sin(thirty), // 2
                -2 * Math.sin(newAngle) * Math.cos(thirty), 2 * Math.cos(newAngle), 2 * Math.sqrt(3) / 3 + 2 * Math.sin(newAngle) * Math.sin(thirty), //3
            ],
            faces: [0, 1, 3, 3, 2, 0],
            rotation: [0, 0, 0]
        },
        {
            // face 3
            vertices: [
                1, 0, -Math.sqrt(3) / 3, // 0
                0, 0, 2 * Math.sqrt(3) / 3, // 1
                1 + 2 * Math.sin(newAngle) * Math.cos(thirty), 2 * Math.cos(newAngle), -Math.sqrt(3) / 3 + 2 * Math.sin(newAngle) * Math.sin(thirty), // 2
                2 * Math.sin(newAngle) * Math.cos(thirty), 2 * Math.cos(newAngle), 2 * Math.sqrt(3) / 3 + 2 * Math.sin(newAngle) * Math.sin(thirty), // 3
            ],
            faces: [0, 1, 3, 3, 2, 0],
            rotation: [0, 0, 0]
        },
        {
            // top
            vertices: [-1, 2, -Math.sqrt(3) / 3, 1, 2, -Math.sqrt(3) / 3, 0, 2, 2 * Math.sqrt(3) / 3],
            faces: [0, 1, 2],
            rotation: [-newAngle, 0, 0]
        },
    ]
    faces.value = newSetup
}, 100);

</script>

<template>
    <!-- Right Triangular - base -->
    <Mesh :position="[0, 0, 0]" :rotation="faces[0].rotation">
        <MeshBasicMaterial color="#118ab2" :side="DoubleSide" :transparent="true" :opacity="0.8" />
        <BufferGeometry name="right-triangular-base" :vertices="faces[0].vertices" :faces="faces[0].faces" />
    </Mesh>
    <LineSegments :position="[0, 0, 0]" :rotation="faces[0].rotation">
        <LineBasicMaterial color="black" />
        <EdgesGeometry geometry="right-triangular-base" />
    </LineSegments>
    <!-- Right Triangular - face 1 -->
    <Mesh :position="[0, 0, -(Math.sqrt(3) / 3)]" :rotation="faces[1].rotation">
        <MeshBasicMaterial color="#118ab2" :side="DoubleSide" :transparent="true" :opacity="0.8" />
        <BufferGeometry name="right-triangular-face-1" :vertices="faces[1].vertices" :faces="faces[1].faces" />
    </Mesh>
    <LineSegments :position="[0, 0, -(Math.sqrt(3) / 3)]" :rotation="faces[1].rotation">
        <LineBasicMaterial color="black" />
        <EdgesGeometry geometry="right-triangular-face-1" />
    </LineSegments>
    <!-- Right Triangular - face 2 -->
    <Mesh :position="[0, 0, 0]" :rotation="faces[2].rotation">
        <MeshBasicMaterial color="#118ab2" :side="DoubleSide" :transparent="true" :opacity="0.8" />
        <BufferGeometry name="right-triangular-face-2" :vertices="faces[2].vertices" :faces="faces[2].faces" />
    </Mesh>
    <LineSegments :position="[0, 0, 0]" :rotation="faces[2].rotation">
        <LineBasicMaterial color="black" />
        <EdgesGeometry geometry="right-triangular-face-2" />
    </LineSegments>
    <!-- Right Triangular - face 3 -->
    <Mesh :position="[0, 0, 0]" :rotation="faces[3].rotation">
        <MeshBasicMaterial color="#118ab2" :side="DoubleSide" :transparent="true" :opacity="0.8" />
        <BufferGeometry name="right-triangular-face-3" :vertices="faces[3].vertices" :faces="faces[3].faces" />
    </Mesh>
    <LineSegments :position="[0, 0, 0]" :rotation="faces[3].rotation">
        <LineBasicMaterial color="black" />
        <EdgesGeometry geometry="right-triangular-face-3" />
    </LineSegments>
    <!-- Right Triangular - Top -->
    <Mesh :position="[0, 0, 0]" :rotation="faces[4].rotation">
        <MeshBasicMaterial color="#118ab2" :side="DoubleSide" :transparent="true" :opacity="0.8" />
        <BufferGeometry name="right-triangular-top" :vertices="faces[4].vertices" :faces="faces[4].faces" />
    </Mesh>
    <LineSegments :position="[0, 0, 0]" :rotation="faces[4].rotation">
        <LineBasicMaterial color="black" />
        <EdgesGeometry geometry="right-triangular-top" />
    </LineSegments>
</template>

