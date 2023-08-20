<script setup lang="ts">
import {
    Renderer,
    Scene,
    OrthographicCamera,
    OrbitControls,
    AmbientLight,
    MeshLambertMaterial,
    PlaneGeometry,
    Mesh,
    MeshBasicMaterial,
    LineBasicMaterial,
    EdgesGeometry,
    LineSegments,
    CylinderGeometry,
} from "@janvorisek/drie";
import { DoubleSide } from "three";

</script>

<template>
    <div style="width: 100%; height: 100%;" border="~ main rounded-lg" overflow-hidden>
        <Renderer :antialias="true" :shadowMapEnabled="true" :alpha="false">
            <OrthographicCamera :position="[10, 10, 0]">
                <OrbitControls />
            </OrthographicCamera>
            <Scene background="#ededed">
                <AmbientLight :position="[0, 4, 4]" :intensity="1" />
                <!-- Bottom Plane -->
                <Mesh :position="[0, -0.1, 0]" :rotation="[Math.PI / 2, 0, 0]" :receiveShadow="true">
                    <MeshLambertMaterial color="#ffffff" :side="DoubleSide" />
                    <PlaneGeometry :width="20" :height="20" />
                </Mesh>
                <!-- Truncated Pyramid -->
                <Mesh :position="[4, 2.5, -4]">
                    <MeshBasicMaterial color="#ffffff" :side="DoubleSide" :transparent="true" :opacity="0.3" />
                    <CylinderGeometry name="truncated-pyramid" :radius-top="2" :radius-bottom="4" :height="5"
                        :radial-segments="4" />
                </Mesh>
                <LineSegments :position="[4, 2.5, -4]">
                    <LineBasicMaterial :color="0x000000" />
                    <EdgesGeometry geometry="truncated-pyramid" />
                </LineSegments>
                <!-- Truncated Pyramid Base -->
                <Mesh :position="[-4, 2.5, 4]">
                    <MeshBasicMaterial color="#ffffff" :side="DoubleSide" :transparent="true" :opacity="0.3" />
                    <CylinderGeometry name="truncated-pyramid-base" :radius-top="2" :radius-bottom="4" :height="5"
                        :radial-segments="4" />
                </Mesh>
                <LineSegments :position="[-4, 2.5, 4]">
                    <LineBasicMaterial :color="0x000000" />
                    <EdgesGeometry geometry="truncated-pyramid-base" />
                </LineSegments>
                <!-- Truncated Pyramid Top -->
                <Mesh :position="[-4, 7.5, 4]">
                    <MeshBasicMaterial color="#ff0000" :side="DoubleSide" :transparent="true" :opacity="0.3" />
                    <CylinderGeometry name="truncated-pyramid-top" :radius-top="0" :radius-bottom="2" :height="5"
                        :radial-segments="4" />
                </Mesh>
                <LineSegments :position="[-4, 7.5, 4]">
                    <LineBasicMaterial :color="0x000000" />
                    <EdgesGeometry geometry="truncated-pyramid-top" />
                </LineSegments>
            </Scene>
        </Renderer>
    </div>
</template>

