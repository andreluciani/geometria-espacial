<script setup lang="ts">
import { Renderer, Scene } from "@janvorisek/drie";
import {
    ConeGeometry,
    Mesh, MeshBasicMaterial,
    BoxGeometry,
    PlaneGeometry,
    CylinderGeometry,
    AmbientLight,
    LineBasicMaterial,
    OrthographicCamera,
    OrbitControls,
    EdgesGeometry,
    LineSegments,
    Group
} from "@janvorisek/drie";
import { ref, Ref, onMounted } from 'vue'
import { DoubleSide } from "three";
import { Fog } from "three";

const rot = ref<[number, number, number]>([0, 0, 0]);
const sceneRef = ref<Ref<typeof Scene> | null>(null)

onMounted(() => {
    if (sceneRef.value) {
        sceneRef.value.three.fog = new Fog(0x00ffff, 150, 300);
    }
});

</script>

<template>
    <div style="width: 40vh; height: 40vh;" border="~ main rounded-lg" overflow-hidden>
        <Renderer :antialias="true">
            <LineBasicMaterial name="baseOutline" ref="lineRef" />
            <OrthographicCamera :position="[100, 100, 100]" :lookAt="[0, 0, 0]">
                <OrbitControls />
            </OrthographicCamera>
            <Scene ref="sceneRef" background="#cfcfcf">
                <AmbientLight :position="[0, 4, 4]" :intensity="1" />
                <!-- Base Plane -->
                <Mesh :position="[0, 0, 0]" :rotation="[Math.PI / 2, 0, 0]">
                    <MeshBasicMaterial color="#cfcfcf" :side="DoubleSide" />
                    <PlaneGeometry :width="2000" :height="2000" />
                </Mesh>
                <Group>
                    <Group>
                        <!-- Prism -->
                        <Mesh :position="[12, 2.01, 12]" :rotation="rot">
                            <MeshBasicMaterial color="blue" :transparent="true" :opacity="0.4" />
                            <BoxGeometry name="prism" :width="5" :height="4" :depth="3" :widthSegments="1"
                                :heightSegments="1" :depthSegments="1" />
                        </Mesh>
                        <LineSegments :position="[12, 2.01, 12]" :rotation="rot">
                            <LineBasicMaterial color="black" />
                            <EdgesGeometry geometry="prism" />
                        </LineSegments>
                    </Group>
                    <Group>
                        <!-- Square Frustum -->
                        <Mesh :position="[12, 2.01, 0]" :rotation="[0, Math.PI / 4, 0]">
                            <MeshBasicMaterial color="blue" :transparent="true" :opacity="0.4" />
                            <CylinderGeometry name="square frustum" :radius-top="1.5" :radius-bottom="3" :height="4"
                                :radial-segments="4" />
                        </Mesh>
                        <LineSegments :position="[12, 2.01, 0]" :rotation="[0, Math.PI / 4, 0]">
                            <LineBasicMaterial color="black" />
                            <EdgesGeometry geometry="square frustum" />
                        </LineSegments>
                    </Group>
                    <Group>
                        <!-- Pyramid -->
                        <Mesh :position="[12, 2.01, -12]" :rotation="[0, Math.PI / 4, 0]">
                            <MeshBasicMaterial color="blue" :transparent="true" :opacity="0.4" />
                            <ConeGeometry name="pyramid" :radius="4" :height="4" :radialSegments="4" />
                        </Mesh>
                        <LineSegments :position="[12, 2.01, -12]" :rotation="[0, Math.PI / 4, 0]">
                            <LineBasicMaterial color="black" />
                            <EdgesGeometry geometry="pyramid" />
                        </LineSegments>
                    </Group>
                    <Group>
                        <!-- Cylinder -->
                        <Mesh :position="[0, 2.01, 12]" :rotation="rot">
                            <MeshBasicMaterial color="blue" :transparent="true" :opacity="0.4" />
                            <CylinderGeometry name="cylinder" :radius-top="3" :radius-bottom="3" :height="4"
                                :radial-segments="20" />
                        </Mesh>
                        <LineSegments :position="[0, 2.01, 12]" :rotation="rot">
                            <LineBasicMaterial color="black" />
                            <EdgesGeometry geometry="cylinder" />
                        </LineSegments>
                    </Group>
                    <Group>
                        <!-- Conical Frustum -->
                        <Mesh :position="[0, 2.01, 0]" :rotation="rot">
                            <MeshBasicMaterial color="blue" :transparent="true" :opacity="0.4" />
                            <CylinderGeometry name="conical frustum" :radius-top="1.5" :radius-bottom="3" :height="4"
                                :radial-segments="20" />
                        </Mesh>
                        <LineSegments :position="[0, 2.01, 0]" :rotation="rot">
                            <LineBasicMaterial color="black" />
                            <EdgesGeometry geometry="conical frustum" />
                        </LineSegments>
                    </Group>
                    <Group>
                        <!-- Cone -->
                        <Mesh :position="[0, 2.01, -12]" :rotation="rot">
                            <MeshBasicMaterial color="blue" :transparent="true" :opacity="0.4" />
                            <ConeGeometry name="cone" :radius="3" :height="4" />
                        </Mesh>
                        <LineSegments :position="[0, 2.01, -12]" :rotation="rot">
                            <LineBasicMaterial color="black" />
                            <EdgesGeometry geometry="cone" />
                        </LineSegments>
                    </Group>
                </Group>
            </Scene>
        </Renderer>
    </div>
</template>

