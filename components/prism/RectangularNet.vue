<script setup lang="ts">
import {
    Mesh,
    MeshBasicMaterial,
    BufferGeometry,
    LineBasicMaterial,
    EdgesGeometry,
    LineSegments,
} from "@janvorisek/drie";
import { ref } from "vue"
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
const topRotation = ref<number>(props.topRotation);
const length = 2
const depth = 3
const height = 4

const initialSetup = [
    {
        // base
        vertices: [
            -length, 0, depth, // 0
            0, 0, depth, // 1
            0, 0, 0, // 2
            -length, 0, 0, // 3
        ],
        faces: [0, 1, 2, 2, 3, 0],
        rotation: [0, 0, 0]
    },
    {
        // face 1
        vertices: [
            0, 0, depth, // 0
            0, 0, 0, // 1
            0, height, 0, // 2
            0, height, depth, // 3
        ],
        faces: [0, 1, 2, 2, 3, 0],
        rotation: [0, 0, 0]
    },
    {
        // face 2
        vertices: [
            0, 0, 0, // 0
            -length, 0, 0, // 1
            -length, height, 0, // 2
            0, height, 0 // 3
        ],
        faces: [0, 1, 2, 2, 3, 0],
        rotation: [0, 0, 0]
    },
    {
        // face 3
        vertices: [
            0, 0, depth, // 0
            0, 0, 0, // 1
            0, height, 0, // 2
            0, height, depth, // 3
        ],
        faces: [0, 1, 2, 2, 3, 0],
        rotation: [0, 0, 0]
    },
    {
        // face 4
        vertices: [
            0, 0, 0, // 0
            -length, 0, 0, // 1
            -length, height, 0, // 2
            0, height, 0 // 3
        ],
        faces: [0, 1, 2, 2, 3, 0],
        rotation: [0, 0, 0]
    },
    {
        // top
        vertices: [
            -length, height, depth, // 0
            0, height, depth, // 1
            0, height, 0, // 2
            -length, height, 0, // 3
        ],
        faces: [0, 1, 2, 2, 3, 0],
        rotation: [0, 0, 0]
    },
]

const faces = ref<Array<{ vertices: Array<number>, faces: Array<number>, rotation: Array<number> }>>(initialSetup);


window.setInterval(() => {
    if (!props.plan) {
        return
    }
    let newAngle = facesRotation.value + Math.PI / 300
    let newTopAngle = Math.min(topRotation.value + Math.PI / 100, Math.PI / 2)
    if (props.resetPlan) {
        newAngle = 0
        newTopAngle = 0
        facesRotation.value = Math.min(newAngle, Math.PI / 2)
        topRotation.value = Math.min(newTopAngle, Math.PI / 2)
    }
    facesRotation.value = Math.min(newAngle, Math.PI / 2)
    if (facesRotation.value === Math.PI / 2) {
        topRotation.value = Math.min(newTopAngle, Math.PI / 2)
    }
    const newSetup = [
        {
            // base
            vertices: [
                -length, 0, depth, // 0
                0, 0, depth, // 1
                0, 0, 0, // 2
                -length, 0, 0, // 3
            ],
            faces: [0, 1, 2, 2, 3, 0],
            rotation: [0, 0, 0]
        },
        {
            // face 1
            vertices: [
                0, 0, depth, // 0
                0, 0, 0, // 1
                0, height, 0, // 2
                0, height, depth, // 3
            ],
            faces: [0, 1, 2, 2, 3, 0],
            rotation: [0, 0, -newAngle]
        },
        {
            // face 2
            vertices: [
                0, 0, 0, // 0
                -length, 0, 0, // 1
                -length, height, 0, // 2
                0, height, 0 // 3
            ],
            faces: [0, 1, 2, 2, 3, 0],
            rotation: [-newAngle, 0, 0]
        },
        {
            // face 3
            vertices: [
                0, 0, depth, // 0
                0, 0, 0, // 1
                0, height, 0, // 2
                0, height, depth, // 3
            ],
            faces: [0, 1, 2, 2, 3, 0],
            rotation: [0, 0, newAngle]
        },
        {
            // face 4
            vertices: [
                0, 0, 0, // 0
                -length, 0, 0, // 1
                -length, height, 0, // 2
                0, height, 0 // 3
            ],
            faces: [0, 1, 2, 2, 3, 0],
            rotation: [newAngle, 0, 0]
        },
        {
            // top
            vertices: [
                -length, height + depth * Math.sin(newTopAngle), depth * Math.cos(newTopAngle), // 0
                0 , height + depth * Math.sin(newTopAngle), depth * Math.cos(newTopAngle), // 1
                0, height, 0, // 2
                -length, height, 0, // 3
            ],
            faces: [0, 1, 2, 2, 3, 0],
            rotation: [-newAngle, 0, 0]
        },
    ]
    faces.value = newSetup
}, 30);

</script>

<template>
    <!-- Right Rectangular - base -->
    <Mesh :position="[0, 0, 0]" :rotation="faces[0].rotation">
        <MeshBasicMaterial color="#f04848" :side="DoubleSide" :transparent="true" :opacity="0.8" />
        <BufferGeometry name="right-rectangular-base" :vertices="faces[0].vertices" :faces="faces[0].faces" />
    </Mesh>
    <LineSegments :position="[0, 0, 0]" :rotation="faces[0].rotation">
        <LineBasicMaterial color="black" />
        <EdgesGeometry geometry="right-rectangular-base" />
    </LineSegments>
    <!-- Right Rectangular - face 1 -->
    <Mesh :position="[0, 0, 0]" :rotation="faces[1].rotation">
        <MeshBasicMaterial color="#f04848" :side="DoubleSide" :transparent="true" :opacity="0.8" />
        <BufferGeometry name="right-rectangular-face-1" :vertices="faces[1].vertices" :faces="faces[1].faces" />
    </Mesh>
    <LineSegments :position="[0, 0, 0]" :rotation="faces[1].rotation">
        <LineBasicMaterial color="black" />
        <EdgesGeometry geometry="right-rectangular-face-1" />
    </LineSegments>
    <!-- Right Rectangular - face 2 -->
    <Mesh :position="[0, 0, 0]" :rotation="faces[2].rotation">
        <MeshBasicMaterial color="#f04848" :side="DoubleSide" :transparent="true" :opacity="0.8" />
        <BufferGeometry name="right-rectangular-face-2" :vertices="faces[2].vertices" :faces="faces[2].faces" />
    </Mesh>
    <LineSegments :position="[0, 0, 0]" :rotation="faces[2].rotation">
        <LineBasicMaterial color="black" />
        <EdgesGeometry geometry="right-rectangular-face-2" />
    </LineSegments>
    <!-- Right Rectangular - face 3 -->
    <Mesh :position="[-length, 0, 0]" :rotation="faces[3].rotation">
        <MeshBasicMaterial color="#f04848" :side="DoubleSide" :transparent="true" :opacity="0.8" />
        <BufferGeometry name="right-rectangular-face-3" :vertices="faces[3].vertices" :faces="faces[3].faces" />
    </Mesh>
    <LineSegments :position="[-length, 0, 0]" :rotation="faces[3].rotation">
        <LineBasicMaterial color="black" />
        <EdgesGeometry geometry="right-rectangular-face-3" />
    </LineSegments>
    <!-- Right Rectangular - face 4 -->
    <Mesh :position="[0, 0, depth]" :rotation="faces[4].rotation">
        <MeshBasicMaterial color="#f04848" :side="DoubleSide" :transparent="true" :opacity="0.8" />
        <BufferGeometry name="right-rectangular-face-4" :vertices="faces[4].vertices" :faces="faces[4].faces" />
    </Mesh>
    <LineSegments :position="[0, 0, depth]" :rotation="faces[4].rotation">
        <LineBasicMaterial color="black" />
        <EdgesGeometry geometry="right-rectangular-face-4" />
    </LineSegments>
    <!-- Right Rectangular - Top -->
    <Mesh :position="[0, 0, 0]" :rotation="faces[5].rotation">
        <MeshBasicMaterial color="#f04848" :side="DoubleSide" :transparent="true" :opacity="0.8" />
        <BufferGeometry name="right-rectangular-top" :vertices="faces[5].vertices" :faces="faces[5].faces" />
    </Mesh>
    <LineSegments :position="[0, 0, 0]" :rotation="faces[5].rotation">
        <LineBasicMaterial color="black" />
        <EdgesGeometry geometry="right-rectangular-top" />
    </LineSegments>
</template>

