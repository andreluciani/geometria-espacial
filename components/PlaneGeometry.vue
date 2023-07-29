<script setup lang="ts">
import { Renderer, Scene } from "@janvorisek/drie";
import {
    BufferGeometry,
    Mesh, MeshBasicMaterial,
    PlaneGeometry,
    CircleGeometry,
    AmbientLight,
    LineBasicMaterial,
    OrthographicCamera,
    OrbitControls,
    EdgesGeometry,
    LineSegments,
    GridHelper,
    Group,
    Line,
    Points,
    PointsMaterial,
    TextureLoader
} from "@janvorisek/drie";
import { ref, reactive } from 'vue'
import { DoubleSide, AdditiveBlending } from "three";

const lineVertices = reactive<number[]>([
    5, -50, 0,
    10, 50, 0,
]);

const lineTwoVertices = reactive<number[]>([
    10, -50, 0,
    -15, 50, 0,
]);

const pointTextureRef = ref(null)

</script>

<template>
    <div style="width: 70vh; height: 40vh;" border="~ main rounded-lg">
        <Renderer :antialias="true">
            <OrthographicCamera :position="[0, 100, 0]" :up="[1, 1, 0]">
                <OrbitControls :target="[0, 0, 0]" :enableRotate="false" />
            </OrthographicCamera>
            <Scene background="#ffffff">
                <AmbientLight :position="[0, 4, 4]" :intensity="1" />
                <!-- Base Plane -->
                <Mesh :position="[0, 0, 0]" :rotation="[Math.PI / 2, 0, 0]">
                    <MeshBasicMaterial color="#cfcfcf" :side="DoubleSide" />
                    <PlaneGeometry :width="100" :height="100" />
                    <GridHelper :colorCenterLine="0x888888" :position="[0, 0, 0]" :size="100" :divisions="100" />
                </Mesh>
                <Group>
                    <Group>
                        <!-- Square -->
                        <Mesh :position="[3, 0.01, 10]" :rotation="[-Math.PI / 2, 0, -Math.PI / 4]">
                            <LineBasicMaterial color="purple" :side="DoubleSide" :transparent="true" :opacity="0.4" />
                            <CircleGeometry name="square" :radius="4" :segments="4" />
                        </Mesh>
                        <LineSegments :position="[3, 0.01, 10]" :rotation="[-Math.PI / 2, 0, -Math.PI / 4]">
                            <LineBasicMaterial color="black" />
                            <EdgesGeometry geometry="square" />
                        </LineSegments>
                    </Group>
                    <Group>
                        <!-- Circle -->
                        <Mesh :position="[3, 0.01, 3]" :rotation="[-Math.PI / 2, 0, 0]">
                            <MeshBasicMaterial color="blue" :side="DoubleSide" :transparent="true" :opacity="0.4" />
                            <CircleGeometry name="circle" :radius="3" />
                        </Mesh>
                        <LineSegments :position="[3, 0.01, 3]" :rotation="[-Math.PI / 2, 0, 0]">
                            <LineBasicMaterial color="black" />
                            <EdgesGeometry geometry="circle" />
                        </LineSegments>
                    </Group>
                    <Group>
                        <!-- Circular Sector -->
                        <Mesh :position="[0, 0.01, -3]" :rotation="[-Math.PI / 2, 0, 0]">
                            <MeshBasicMaterial color="green" :side="DoubleSide" :transparent="true" :opacity="0.4" />
                            <CircleGeometry name="circular-sector" :radius="6" :thetaLength="Math.PI / 6" />
                        </Mesh>
                        <LineSegments :position="[0, 0.01, -3]" :rotation="[-Math.PI / 2, 0, 0]">
                            <LineBasicMaterial color="black" />
                            <EdgesGeometry geometry="circular-sector" />
                        </LineSegments>
                    </Group>
                    <Group>
                        <!-- Hexagon -->
                        <Mesh :position="[-5, 0.01, -5]" :rotation="[-Math.PI / 2, 0, -Math.PI / 2]">
                            <MeshBasicMaterial color="pink" :side="DoubleSide" :transparent="true" :opacity="0.4" />
                            <CircleGeometry name="hexagon" :radius="3" :segments="6" />
                        </Mesh>
                        <LineSegments :position="[-5, 0.01, -5]" :rotation="[-Math.PI / 2, 0, -Math.PI / 2]">
                            <LineBasicMaterial color="black" />
                            <EdgesGeometry geometry="hexagon" />
                        </LineSegments>
                    </Group>
                    <Group>
                        <!-- Line -->
                        <Line :position="[0, 0.01, 0]" :rotation="[Math.PI / 2, 0, 0]">
                            <LineBasicMaterial :color="0x000000" />
                            <BufferGeometry name="line" :vertices="lineVertices" />
                        </Line>
                        <Line :position="[0, 0.01, 0]" :rotation="[Math.PI / 2, 0, 0]">
                            <LineBasicMaterial :color="0x0000ff" />
                            <BufferGeometry name="lineTwo" :vertices="lineTwoVertices" />
                        </Line>
                    </Group>
                    <Group>
                        <!-- Point -->
                        <Points :position="[0, 0.3, 0]" :rotation="[Math.PI / 2, 0, 0]">
                            <PointsMaterial :color="0x000000" :size="2" />
                            <BufferGeometry name="point" :vertices="[-0.5, -0.5, -0.5]" />
                        </Points>
                        <Points :position="[0, 0.3, 0]" :rotation="[Math.PI / 2, 0, 0]">
                            <PointsMaterial :color="0x0000ff" :size="2" />
                            <BufferGeometry name="point" :vertices="[-1.5, -1.5, -1.5]" />
                        </Points>
                    </Group>
                </Group>
            </Scene>
        </Renderer>
    </div>
</template>

