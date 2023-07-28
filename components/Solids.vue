<script setup lang="ts">
import { Renderer, Scene } from "@janvorisek/drie";
import { MeshNormalMaterial, ConeGeometry, MeshLambertMaterial, Mesh, MeshBasicMaterial, BoxGeometry, PlaneGeometry, CylinderGeometry, AmbientLight, LineBasicMaterial, LineLoop, OrthographicCamera, OrbitControls } from "@janvorisek/drie";
import { ref, onMounted } from 'vue'
import { DoubleSide } from "three";
const scene = ref(null)
const rot = ref<[number, number, number]>([0, 0, 0]);
let angle = Math.PI / 360;

window.setInterval(() => {
    angle += Math.PI / 100;
    rot.value = [0, angle, 0];
}, 100);

onMounted(() => {
    console.log(scene)
});

</script>

<template>
    <div style="width: 50vh; height: 50vh;" border="~ main rounded-lg">
        <Renderer :antialias="true">
            <OrthographicCamera :position="[5, 5, 5]">
                <OrbitControls />
            </OrthographicCamera>
            <Scene background="transparent">
                <AmbientLight :position="[0, 0, 10]" :intensity="1" />
                <!-- Base Plane -->
                <Mesh :position="[0, -2, 0]" :rotation="[Math.PI / 2, 0, 0]">
                    <MeshBasicMaterial color="#101010" :side="DoubleSide" />
                    <PlaneGeometry :width="40" :height="40" />
                </Mesh>
                <!-- Prism -->
                <Mesh :position="[0, 0, 0]" :rotation="rot">
                    <MeshBasicMaterial color="blue" />
                    <BoxGeometry :width="5" :height="4" :depth="2" :widthSegments="1" :heightSegments="1"
                        :depthSegments="1" />
                </Mesh>
                <LineLoop :position="[0, 0, 0]" :rotation="rot">
                    <LineBasicMaterial color="black" />
                    <BoxGeometry :width="5" :height="4" :depth="2" :widthSegments="1" :heightSegments="1"
                        :depthSegments="1" />
                </LineLoop>
                <!-- Cone -->
                <Mesh :position="[0, 0, 8]" :rotation="rot">
                    <MeshNormalMaterial :side="DoubleSide" />
                    <ConeGeometry name="geo" :radius="3" :height="4" />
                </Mesh>
                <LineLoop :position="[0, 0, 8]" :rotation="rot">
                    <LineBasicMaterial color="black" />
                    <ConeGeometry name="geo" :radius="3" :height="4" />
                </LineLoop>
                <!-- Cylinder -->
                <Mesh :position="[0, 0, -8]" :rotation="rot">
                    <MeshLambertMaterial color="blue" />
                    <CylinderGeometry name="geo" :radius-top="2" :radius-bottom="2" :height="4" :radial-segments="20" />
                </Mesh>
                <LineLoop :position="[0, 0, -8]" :rotation="rot">
                    <LineBasicMaterial color="black" />
                    <CylinderGeometry name="geo" :radius-top="2" :radius-bottom="2" :height="4" :radial-segments="20" />
                </LineLoop>
            </Scene>
        </Renderer>
    </div>
</template>

