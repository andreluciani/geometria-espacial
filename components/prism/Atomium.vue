<script setup lang="ts">
import {
    Mesh,
    MeshLambertMaterial,
    LineBasicMaterial,
    EdgesGeometry,
    LineSegments,
    CylinderGeometry,
    SphereGeometry,
    Group
} from "@janvorisek/drie";

const props = defineProps({
    hide: {
        type: Boolean,
        required: false,
        default: () => false
    }
})

const positions = [
    [-4, 0, -4],
    [4, 0, -4],
    [-4, 0, 4],
    [4, 0, 4],
    [0, -4, -4],
    [0, 4, -4],
    [0, -4, 4],
    [0, 4, 4],
    [-4, -4, 0],
    [4, -4, 0],
    [-4, 4, 0],
    [4, 4, 0]
]

const rotations = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, Math.PI / 2],
    [0, 0, Math.PI / 2],
    [0, 0, Math.PI / 2],
    [0, 0, Math.PI / 2],
    [Math.PI / 2, 0, 0],
    [Math.PI / 2, 0, 0],
    [Math.PI / 2, 0, 0],
    [Math.PI / 2, 0, 0]
]

const positionsCross = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
const rotationsCross = [
    [0, Math.PI / 4, Math.PI / 3.3],
    [0, Math.PI / 4, -Math.PI / 3.3],
    [0, -Math.PI / 4, Math.PI / 3.3],
    [0, -Math.PI / 4, -Math.PI / 3.3],
]

const spherePositions = [
    [0, 0, 0],
    [-4, 4, -4],
    [-4, 4, 4],
    [4, 4, -4],
    [4, 4, 4],
    [-4, -4, -4],
    [-4, -4, 4],
    [4, -4, -4],
    [4, -4, 4],
]

</script>

<template>
    <Group v-for="(position, index) in positions">
        <Mesh :position="position" :rotation="rotations[index]" :castShadow="true">
            <MeshLambertMaterial color="#ffffff" :transparent="true" :opacity="0" />
            <CylinderGeometry name="{{`line-${index}`}}" :radius-top="0.04" :radius-bottom="0.02" :height="8"
                :radial-segments="30" />
        </Mesh>
        <LineSegments :position="position" :rotation="rotations[index]">
            <LineBasicMaterial :color="0x000000" />
            <EdgesGeometry geometry="{{`line-${index}`}}" />
        </LineSegments>
    </Group>
    <Group v-for="(position, index) in positionsCross">
        <Mesh :position="position" :rotation="rotationsCross[index]" :castShadow="true">
            <MeshLambertMaterial color="#ffffff" :transparent="true" :opacity="0" />
            <CylinderGeometry name="{{`line-${index}-cross`}}" :radius-top="0.04" :radius-bottom="0.02"
                :height="Math.sqrt(3) * 8" :radial-segments="30" />
        </Mesh>
        <LineSegments :position="position" :rotation="rotationsCross[index]">
            <LineBasicMaterial :color="0x000000" />
            <EdgesGeometry geometry="{{`line-${index}-cross`}}" />
        </LineSegments>
    </Group>
    <Group v-for="position in spherePositions">
        <Mesh :position="position">
            <MeshLambertMaterial color="#ffffff" :transparent="props.hide" :opacity="props.hide ? 0 : 1"/>
            <SphereGeometry :radius="1" />
        </Mesh>
    </Group>
</template>

