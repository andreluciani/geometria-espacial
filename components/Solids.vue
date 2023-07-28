<script setup lang="ts">
import { Renderer, Scene } from "@janvorisek/drie";
import {
    MeshNormalMaterial,
    ConeGeometry,
    MeshLambertMaterial,
    Mesh, MeshBasicMaterial,
    BoxGeometry,
    PlaneGeometry,
    CylinderGeometry,
    AmbientLight,
    LineBasicMaterial,
    LineLoop,
    OrthographicCamera,
    OrbitControls,
    EdgesGeometry,
    LineSegments,
    GridHelper,
    Group
} from "@janvorisek/drie";
import { ref, onMounted } from 'vue'
import { DoubleSide } from "three";
import { Intersection } from "three/src/core/Raycaster"

import {
    Mesh as TMesh,
    MeshBasicMaterial as TMeshBasicMaterial,
    BufferGeometry as TBufferGeometry,
    Color // no conflict here
} from "three";

// AXES REFERENCE
// [X,Z,Y]

const onMouseEnter = (is: Intersection<TMesh<TBufferGeometry, TMeshBasicMaterial>>[]) => {
    if (!is[1]?.object) {
        return
    }
    is[1].object.parent.children[0].material.color = new Color("red");
};

const onMouseLeave = (is: Intersection<TMesh<TBufferGeometry, TMeshBasicMaterial>>[]) => {
    if (!is[1]?.object) {
        return
    }
    is[1].object.parent.children[0].material.color = new Color("blue");
};

const rot = ref<[number, number, number]>([0, 0, 0]);

// let angle = 0;
// window.setInterval(() => {
//     angle += Math.PI / 100;
//     rot.value = [0, angle, 0];
// }, 100);



</script>

<template>
    <div style="width: 50vh; height: 50vh;" border="~ main rounded-lg">
        <Renderer :antialias="true">
            <OrthographicCamera :position="[5, 5, 5]">
                <OrbitControls />
            </OrthographicCamera>
            <Scene background="#ffffff">
                <AmbientLight :position="[0, 4, 4]" :intensity="1" />
                <!-- Base Plane -->
                <Mesh :position="[0, -2, 0]" :rotation="[Math.PI / 2, 0, 0]">
                    <MeshBasicMaterial color="#cfcfcf" :side="DoubleSide" />
                    <PlaneGeometry :width="40" :height="40" />
                    <GridHelper :position="[0, -2, 0]" :size="40" :divisions="40" />
                </Mesh>
                <Group enableRaycasting :onMouseEnter="onMouseEnter" :onMouseLeave="onMouseLeave">
                    <Group>
                        <!-- Prism -->
                        <Mesh :position="[0, 0, 0]" :rotation="rot">
                            <MeshBasicMaterial color="blue" :transparent="true" :opacity="0.4" />
                            <BoxGeometry name="prism" :width="5" :height="4" :depth="2" :widthSegments="1"
                                :heightSegments="1" :depthSegments="1" />
                        </Mesh>
                        <LineSegments :position="[0, 0, 0]" :rotation="rot">
                            <LineBasicMaterial color="black" />
                            <EdgesGeometry geometry="prism" />
                        </LineSegments>
                    </Group>
                    <Group>
                        <!-- Cone -->
                        <Mesh :position="[0, 0, 8]" :rotation="rot">
                            <MeshBasicMaterial color="blue" :transparent="true" :opacity="0.4" />
                            <ConeGeometry name="cone" :radius="3" :height="4" />
                        </Mesh>
                        <LineSegments :position="[0, 0, 8]" :rotation="rot">
                            <LineBasicMaterial color="black" />
                            <EdgesGeometry geometry="cone" />
                        </LineSegments>
                    </Group>
                    <Group>
                        <!-- Cylinder -->
                        <Mesh :position="[0, 0, -8]" :rotation="rot">
                            <MeshBasicMaterial color="blue" :transparent="true" :opacity="0.4" />
                            <CylinderGeometry name="cylinder" :radius-top="2" :radius-bottom="2" :height="4"
                                :radial-segments="20" />
                        </Mesh>
                        <LineSegments :position="[0, 0, -8]" :rotation="rot">
                            <LineBasicMaterial color="black" />
                            <EdgesGeometry geometry="cylinder" />
                        </LineSegments>
                    </Group>
                    <Group>
                        <!-- Pyramid -->
                        <Mesh :position="[0, 0, -16]" :rotation="rot">
                            <MeshBasicMaterial color="blue" :transparent="true" :opacity="0.4" />
                            <ConeGeometry name="pyramid" :radius="3" :height="4" :radialSegments="4" />
                        </Mesh>
                        <LineSegments :position="[0, 0, -16]" :rotation="rot">
                            <LineBasicMaterial color="black" />
                            <EdgesGeometry geometry="pyramid" />
                        </LineSegments>
                    </Group>
                </Group>
            </Scene>
        </Renderer>
    </div>
</template>

