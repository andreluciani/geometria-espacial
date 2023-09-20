<script setup lang="ts">
import { Renderer, Scene } from "@janvorisek/drie";
import {
    Mesh, MeshBasicMaterial,
    PlaneGeometry,
    AmbientLight,
    LineBasicMaterial,
    OrthographicCamera,
    OrbitControls,
    LineSegments,
    Group,
    ConeGeometry,
    EdgesGeometry
} from "@janvorisek/drie";
import { ref, Ref, onMounted } from 'vue'
import { DoubleSide } from "three";
import { Fog } from "three";

const rot = ref<[number, number, number]>([0, 0, 0]);
const sceneRef = ref<Ref<typeof Scene> | null>(null);

onMounted(() => {
    if (sceneRef.value) {
        sceneRef.value.three.fog = new Fog(0x0c6987, 150, 300);
    }
});

</script>

<template>
    <div style="width: 100%; height: 100%;" border="~ main rounded-lg" overflow-hidden>
        <Renderer :antialias="true">
            <OrthographicCamera :position="[-30, 30, 30]" :lookAt="[0, 0, 0]">
                <OrbitControls />
            </OrthographicCamera>
            <Scene ref="sceneRef" background="#ededed">
                <AmbientLight :position="[0, 4, 4]" :intensity="1" />
                <!-- Base Plane -->
                <Mesh :position="[0, -0.1, 0]" :rotation="[Math.PI / 2, 0, 0]">
                    <MeshBasicMaterial color="#ededed" :side="DoubleSide" />
                    <PlaneGeometry :width="2000" :height="2000" />
                </Mesh>
                <Group>
                    <Group>
                        <!-- Cone -->
                        <Mesh :position="[0, 3.01, 6]" :rotation="rot">
                            <MeshBasicMaterial color="#118ab2" :transparent="true" :opacity="0.8" />
                            <ConeGeometry name="cone" :radius="3" :height="6"
                                :radial-segments="40" />
                        </Mesh>
                        <LineSegments :position="[0, 3.01, 6]" :rotation="rot">
                            <LineBasicMaterial color="black" />
                            <EdgesGeometry geometry="cone" />
                        </LineSegments>
                    </Group>
                </Group>
            </Scene>
        </Renderer>
    </div>
</template>

