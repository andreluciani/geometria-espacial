<script setup lang="ts">
import {
    Mesh,
    MeshLambertMaterial,
    BoxGeometry,
    LineBasicMaterial,
    EdgesGeometry,
    LineSegments,
} from "@janvorisek/drie";

const props = defineProps({
    hide: {
        type: Boolean,
        required: false,
        default: () => false
    }
})

const positions = [
    [0, 0, 0],
    [-3, 0, 0],
    [0, -3, 0],
    [0, -3, -3],
]

</script>

<template>
    <!-- Cube 1 -->
    <Mesh :position="positions[0]" :rotation="[0, 0, 0]" :castShadow="true">
        <MeshLambertMaterial color="#ffffff" :transparent="props.hide" :opacity="props.hide ? 0 : 1" />
        <BoxGeometry name="cube-1" :width="3" :height="3" :depth="3" :widthSegments="1" :heightSegments="1"
            :depthSegments="1" />
    </Mesh>
    <LineSegments :position="positions[0]" :rotation="[0, 0, 0]">
        <LineBasicMaterial :color="0x000000" :transparent="props.hide" :opacity="props.hide ? 0 : 1" />
        <EdgesGeometry geometry="cube-1" />
    </LineSegments>
    <!-- Cube 2 -->
    <Mesh :position="positions[1]" :rotation="[0, 0, 0]" :castShadow="true">
        <MeshLambertMaterial color="#ffffff" :transparent="props.hide" :opacity="props.hide ? 0 : 1" />
        <BoxGeometry name="cube-2" :width="3" :height="3" :depth="3" :widthSegments="1" :heightSegments="1"
            :depthSegments="1" />
    </Mesh>
    <LineSegments :position="positions[1]" :rotation="[0, 0, 0]">
        <LineBasicMaterial :color="0x000000" :transparent="props.hide" :opacity="props.hide ? 0 : 1" />
        <EdgesGeometry geometry="cube-2" />
    </LineSegments>
    <!-- Cube 3 -->
    <Mesh :position="positions[2]" :rotation="[0, 0, 0]" :castShadow="true">
        <MeshLambertMaterial color="#ffffff" :transparent="props.hide" :opacity="props.hide ? 0 : 1" />
        <BoxGeometry name="cube-3" :width="3" :height="3" :depth="3" :widthSegments="1" :heightSegments="1"
            :depthSegments="1" />
    </Mesh>
    <LineSegments :position="positions[2]" :rotation="[0, 0, 0]">
        <LineBasicMaterial :color="0x000000" :transparent="props.hide" :opacity="props.hide ? 0 : 1" />
        <EdgesGeometry geometry="cube-3" />
    </LineSegments>
    <!-- Cube 4 -->
    <Mesh :position="positions[3]" :rotation="[0, 0, 0]" :castShadow="true">
        <MeshLambertMaterial color="#ffffff" :transparent="props.hide" :opacity="props.hide ? 0 : 1" />
        <BoxGeometry name="cube-4" :width="3" :height="3" :depth="3" :widthSegments="1" :heightSegments="1"
            :depthSegments="1" :opacity="props.hide ? 0 : 1" />
    </Mesh>
    <LineSegments :position="positions[3]" :rotation="[0, 0, 0]">
        <LineBasicMaterial :color="0x000000" :transparent="props.hide" :opacity="props.hide ? 0 : 1" />
        <EdgesGeometry geometry="cube-4" />
    </LineSegments>
</template>

