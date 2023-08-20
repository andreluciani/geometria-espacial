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
    BufferGeometry,
    ConeGeometry,
    EdgesGeometry
} from "@janvorisek/drie";
import { ref, Ref, onMounted } from 'vue'
import { DoubleSide } from "three";
import { Fog } from "three";
import { generatePyramid } from '../utils'

const rot = ref<[number, number, number]>([0, 0, 0]);
const sceneRef = ref<Ref<typeof Scene> | null>(null);
const examples = [
    generatePyramid(3, 5, 7, Math.PI / 6),
    generatePyramid(4, 5, 7, Math.PI / 8),
    generatePyramid(3, 5, 7, 0)
]

onMounted(() => {
    if (sceneRef.value) {
        sceneRef.value.three.fog = new Fog(0x0c6987, 150, 300);
    }
});

</script>

<!-- Adicionar definições: reto/oblíquo, regular, reto-retângulo, cubo -->

<template>
    <div style="width: 100%; height: 100%;" border="~ main rounded-lg" overflow-hidden>
        <Renderer :antialias="true">
            <OrthographicCamera :position="[20, 10, -20]" :near="0.1" :far="1000" :up="[0.0, 1, 0]">
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
                        <!-- Oblique Triangular -->
                        <Mesh :position="[-5, 0, 0]" :rotation="rot">
                            <MeshBasicMaterial color="#118ab2" :side="DoubleSide" :transparent="true" :opacity="0.8" />
                            <BufferGeometry name="oblique-triangular" :vertices="examples[0].vertices"
                                :faces="examples[0].faces" />
                        </Mesh>
                        <LineSegments :position="[-5, 0, 0]" :rotation="rot">
                            <LineBasicMaterial color="black" />
                            <EdgesGeometry geometry="oblique-triangular" />
                        </LineSegments>
                    </Group>
                    <Group>
                        <!-- Right Triangular -->
                        <Mesh :position="[14, 0, 0]" :rotation="rot">
                            <MeshBasicMaterial color="#118ab2" :side="DoubleSide" :transparent="true" :opacity="0.8" />
                            <BufferGeometry name="right-triangular" :vertices="examples[2].vertices"
                                :faces="examples[2].faces" />
                        </Mesh>
                        <LineSegments :position="[14, 0, 0]" :rotation="rot">
                            <LineBasicMaterial color="black" />
                            <EdgesGeometry geometry="right-triangular" />
                        </LineSegments>
                    </Group>
                    <Group>
                        <!-- Oblique Square -->
                        <Mesh :position="[24, 0, 0]" :rotation="rot">
                            <MeshBasicMaterial color="#118ab2" :side="DoubleSide" :transparent="true" :opacity="0.8" />
                            <BufferGeometry name="oblique-square" :vertices="examples[1].vertices"
                                :faces="examples[1].faces" />
                        </Mesh>
                        <LineSegments :position="[24, 0, 0]" :rotation="rot">
                            <LineBasicMaterial color="black" />
                            <EdgesGeometry geometry="oblique-square" />
                        </LineSegments>
                    </Group>
                    <Group>
                        <!-- Right Rectangle-->
                        <Mesh :position="[5, 3, 0]" :rotation="[0, Math.PI / 4, 0]">
                            <MeshBasicMaterial color="#118ab2" :side="DoubleSide" :transparent="true" :opacity="0.8" />
                            <ConeGeometry name="right-rectangle" :radius="3" :height="6" :radialSegments="4" />
                        </Mesh>
                        <LineSegments :position="[5, 3, 0]" :rotation="[0, Math.PI / 4, 0]">
                            <LineBasicMaterial color="black" />
                            <EdgesGeometry geometry="right-rectangle" />
                        </LineSegments>
                    </Group>
                </Group>
            </Scene>
        </Renderer>
    </div>
</template>

