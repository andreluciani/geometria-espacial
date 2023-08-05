<script setup lang="ts">
import {
    Mesh,
    MeshLambertMaterial,
    LineSegments,
    LineBasicMaterial
} from "@janvorisek/drie";
import { ref, Ref, onMounted } from "vue"
import { Color, DodecahedronGeometry } from "three";

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

const mesh = ref<Ref<typeof Mesh> | null>(null);
const lines = ref<Ref<typeof LineSegments> | null>(null);
const rot = ref<Array<number>>(props.initialRotation);

window.setInterval(() => {
    const newAngle: Array<number> = [...rot.value];
    newAngle[1] = newAngle[1] - 0.002
    rot.value = newAngle;
}, 10);

onMounted(() => {
    if (!mesh.value || !lines.value) {
        return
    }
    const dodecahedronGeometry = new DodecahedronGeometry(3, 0)
    dodecahedronGeometry.name = "dodecahedron"
    const newThreeProxy = new Proxy(dodecahedronGeometry, {})
    mesh.value.three.geometry = newThreeProxy
    // lines.value.three.geometry = newThreeProxy
});

</script>

<template>
    <!-- Dodecahedron -->
    <Mesh ref="mesh" :position="props.position" :rotation="rot">
        <MeshLambertMaterial color="#118ab2" />
    </Mesh>
    <LineSegments ref="lines" :position="props.position" :rotation="rot">
        <LineBasicMaterial :color="0x000000" />
    </LineSegments>
</template>

