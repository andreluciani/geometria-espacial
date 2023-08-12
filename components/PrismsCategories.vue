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
    BoxGeometry,
    EdgesGeometry
} from "@janvorisek/drie";
import { ref, Ref, onMounted } from 'vue'
import { DoubleSide } from "three";
import { Fog } from "three";
import { generatePrism } from '../utils'

const rot = ref<[number, number, number]>([0, 0, 0]);
const sceneRef = ref<Ref<typeof Scene> | null>(null);
const examples = [
    generatePrism(3, 5, 7, Math.PI / 6),
    generatePrism(4, 5, 7, Math.PI / 18),
    generatePrism(3, 5, 7, 0)
]

const concaveVertices = [
    -2,
    0,
    -2, //
    2,
    0,
    -2, //
    0, 0, 0, //
    2,
    0,
    2, //
    -2,
    0,
    2, // base
    -2,
    5,
    -2, //
    2,
    5,
    -2, //
    0, 5, 0, //
    2,
    5,
    2, //
    -2,
    5,
    2, // top
]

const concaveFaces = [
    0, 1, 2, 2, 3, 4, 4, 0, 2, // base
    0, 1, 6, 0, 6, 5, // face 1
    1, 2, 7, 1, 7, 6, // face 2
    2, 3, 8, 2, 8, 7, // face 3
    3, 4, 9, 3, 9, 8, // face 4
    4, 0, 5, 4, 5, 9, // face 5
    5, 6, 7, 7, 8, 9, 9, 5, 7, // top
];

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
                        <Mesh :position="[0, 0, 0]" :rotation="rot">
                            <MeshBasicMaterial color="#118ab2" :side="DoubleSide" :transparent="true" :opacity="0.8" />
                            <BufferGeometry name="oblique-triangular" :vertices="examples[0].vertices"
                                :faces="examples[0].faces" />
                        </Mesh>
                        <LineSegments :position="[0, 0, 0]" :rotation="rot">
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
                        <!-- Concave Prism-->
                        <Mesh :position="[-10, 0, 0]" :rotation="rot">
                            <MeshBasicMaterial color="#118ab2" :side="DoubleSide" :transparent="true" :opacity="0.8" />
                            <BufferGeometry name="concave" :vertices="concaveVertices" :faces="concaveFaces" />
                        </Mesh>
                        <LineSegments :position="[-10, 0, 0]" :rotation="rot">
                            <LineBasicMaterial color="black" />
                            <EdgesGeometry geometry="concave" />
                        </LineSegments>
                    </Group>
                    <Group>
                        <!-- Right Rectangle-->
                        <Mesh :position="[-20, 2.5, 0]" :rotation="rot">
                            <MeshBasicMaterial color="#118ab2" :side="DoubleSide" :transparent="true" :opacity="0.8" />
                            <BoxGeometry name="right-rectangle" :width="3" :height="5" :depth="4" />
                        </Mesh>
                        <LineSegments :position="[-20, 2.5, 0]" :rotation="rot">
                            <LineBasicMaterial color="black" />
                            <EdgesGeometry geometry="right-rectangle" />
                        </LineSegments>
                    </Group>
                    <Group>
                        <!-- Cube-->
                        <Mesh :position="[-30, 2, 0]" :rotation="rot">
                            <MeshBasicMaterial color="#118ab2" :side="DoubleSide" :transparent="true" :opacity="0.8" />
                            <BoxGeometry name="cube" :width="4" :height="4" :depth="4" />
                        </Mesh>
                        <LineSegments :position="[-30, 2, 0]" :rotation="rot">
                            <LineBasicMaterial color="black" />
                            <EdgesGeometry geometry="cube" />
                        </LineSegments>
                    </Group>
                </Group>
            </Scene>
        </Renderer>
    </div>
</template>

