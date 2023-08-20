<script setup lang="ts">
import {
    Mesh,
    MeshBasicMaterial,
    BufferGeometry,
    LineBasicMaterial,
    EdgesGeometry,
    LineSegments,
    Group
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
})

const facesRotationLength = ref<number>(0);
const facesRotationDepth = ref<number>(0);
const length = 4
const depth = 4
const height = 4
const openAngleLength = Math.atan(length / (2 * height))
const openAngleDepth = Math.atan(depth / (2 * height))

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
            -length / 2, height, depth / 2, // 2
        ],
        faces: [0, 1, 2],
        rotation: [0, 0, 0]
    },
    {
        // face 2
        vertices: [
            0, 0, 0, // 0
            -length, 0, 0, // 1
            -length / 2, height, depth / 2, // 2
        ],
        faces: [0, 1, 2],
        rotation: [0, 0, 0]
    },
    {
        // face 3
        vertices: [
            0, 0, depth, // 0
            0, 0, 0, // 1
            length / 2, height, depth / 2, // 2
        ],
        faces: [0, 1, 2],
        rotation: [0, 0, 0]
    },
    {
        // face 4
        vertices: [
            0, 0, 0, // 0
            -length, 0, 0, // 1
            -length / 2, height, -depth / 2, // 2, // 2
        ],
        faces: [0, 1, 2],
        rotation: [0, 0, 0]
    },
]

const faces = ref<Array<{ vertices: Array<number>, faces: Array<number>, rotation: Array<number> }>>(initialSetup);


window.setInterval(() => {
    if (!props.plan) {
        return
    }
    let newAngleLength = facesRotationLength.value + Math.PI / 300
    let newAngleDepth = facesRotationDepth.value + Math.PI / 300
    if (props.resetPlan) {
        newAngleLength = 0
        newAngleDepth = 0
        facesRotationLength.value = Math.min(newAngleLength, Math.PI / 2 + openAngleLength)
        facesRotationDepth.value = Math.min(newAngleDepth, Math.PI / 2 + openAngleDepth)
    }
    facesRotationLength.value = Math.min(newAngleLength, Math.PI / 2 + openAngleLength)
    facesRotationDepth.value = Math.min(newAngleDepth, Math.PI / 2 + openAngleDepth)
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
                -length / 2, height, depth / 2, // 2
            ],
            faces: [0, 1, 2],
            rotation: [0, 0, -newAngleLength]
        },
        {
            // face 2
            vertices: [
                0, 0, 0, // 0
                -length, 0, 0, // 1
                -length / 2, height, depth / 2, // 2
            ],
            faces: [0, 1, 2],
            rotation: [-newAngleDepth, 0, 0]
        },
        {
            // face 3
            vertices: [
                0, 0, depth, // 0
                0, 0, 0, // 1
                length / 2, height, depth / 2, // 2
            ],
            faces: [0, 1, 2],
            rotation: [0, 0, newAngleLength]
        },
        {
            // face 4
            vertices: [
                0, 0, 0, // 0
                -length, 0, 0, // 1
                -length / 2, height, -depth / 2, // 2, // 2
            ],
            faces: [0, 1, 2],
            rotation: [newAngleDepth, 0, 0]
        },
    ]
    faces.value = newSetup
}, 30);

</script>

<template>
    <Group :position="props.position">
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
    </Group>
</template>

