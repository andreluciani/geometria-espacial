<script setup lang="ts">
import {
    Renderer,
    Scene,
    DirectionalLight,
    OrbitControls,
    OrthographicCamera,
    Mesh,
    MeshStandardMaterial,
    MeshLambertMaterial,
    PlaneGeometry
} from "@janvorisek/drie";
import Cube from "./projections/CubeProjection.vue"
import { ref } from 'vue'
import { DoubleSide } from "three";

const hideCube = ref<boolean>(false)

</script>

<template>
    <div style="width: 100%; height: 85%;" border="~ main rounded-lg" overflow-hidden>
        <Renderer :antialias="true" :shadowMapEnabled="true" :alpha="false">
            <OrthographicCamera :position="[10, 10, -20]">
                <OrbitControls />
            </OrthographicCamera>
            <Scene background="#ededed">
                <DirectionalLight color="#ff0000" :position="[0, 200, 0]" :intensity="2" :cast-shadow="true" />
                <DirectionalLight color="#00ff00" :position="[0, 5, -200]" :intensity="2" :cast-shadow="true" />
                <DirectionalLight color="#0000ff" :position="[200, 5, 0]" :intensity="2" :cast-shadow="true" />
                <!-- Bottom Plane -->
                <Mesh :position="[0, -10, 0]" :rotation="[Math.PI / 2, 0, 0]" :receiveShadow="true">
                    <MeshLambertMaterial color="#ffffff" :side="DoubleSide" />
                    <PlaneGeometry :width="20" :height="20" />
                </Mesh>
                <!-- Back Plane -->
                <Mesh :position="[0, 0, 10]" :rotation="[0, 0, Math.PI]" :receiveShadow="true">
                    <MeshLambertMaterial color="#ffffff" :side="DoubleSide" />
                    <PlaneGeometry :width="20" :height="20" />
                </Mesh>
                <!-- Right Plane -->
                <Mesh :position="[-10, 0, 0]" :rotation="[0, Math.PI / 2, 0]" :receiveShadow="true">
                    <MeshStandardMaterial color="#ffffff" :side="DoubleSide" />
                    <PlaneGeometry :width="20" :height="20" />
                </Mesh>
                <Cube :position="[0, 0, 0]" :hide="!hideCube" />
            </Scene>
        </Renderer>
    </div>
    <div class="flex justify-end">
        <label class="relative inline-flex items-center cursor-pointer scale-70">
            <input type="checkbox" :checked="hideCube" v-model="hideCube" class="sr-only peer">
            <div
                class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
            </div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Alterar visibilidade
            </span>
        </label>
    </div>
</template>

