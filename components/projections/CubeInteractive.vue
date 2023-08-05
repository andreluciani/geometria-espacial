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
    },
    hide: {
        type: Boolean,
        required: false,
        default: () => false
    },
    rotate: {
        type: Boolean,
        required: false,
        default: () => false
    },
    rotationAxis: {
        type: String,
        required: false,
        default: () => 'X'
    },
    resetRotation: {
        type: Boolean,
        required: false,
        default: () => false
    }
})

const rot = ref<Array<number>>(props.initialRotation);

window.setInterval(() => {
    const newAngle: Array<number> = [...rot.value];
    if (props.rotate && props.rotationAxis === 'X') {
        newAngle[0] = newAngle[0] - 0.002
    } else if (props.rotate && props.rotationAxis === 'Y') {
        newAngle[1] = newAngle[1] - 0.002
    } else if (props.rotate && props.rotationAxis === 'Z') {
        newAngle[2] = newAngle[2] - 0.002
    }
    if (props.resetRotation) {
        newAngle[0] = 0
        newAngle[1] = 0
        newAngle[2] = 0
    }
    rot.value = newAngle;
}, 10);

</script>

<template>
    <!-- Cube -->
    <Mesh :position="props.position" :rotation="rot" :castShadow="true">
        <MeshLambertMaterial color="#ffffff" :transparent="hide" :opacity="hide ? 0 : 1" />
        <BoxGeometry name="cube" :width="4" :height="4" :depth="4" :widthSegments="1" :heightSegments="1"
            :depthSegments="1" />
    </Mesh>
    <LineSegments :position="props.position" :rotation="rot">
        <LineBasicMaterial :color="0x000000" :transparent="hide" :opacity="hide ? 0 : 1" />
        <EdgesGeometry geometry="cube" />
    </LineSegments>
</template>

