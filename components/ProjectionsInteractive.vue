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
import ConeInteractive from "./projections/ConeInteractive.vue"
import ConicalFrustumInteractive from "./projections/ConicalFrustumInteractive.vue"
import CubeInteractive from "./projections/CubeInteractive.vue"
import CylinderInteractive from "./projections/CylinderInteractive.vue"
import PyramidInteractive from "./projections/PyramidInteractive.vue"
import SphereInteractive from "./projections/SphereInteractive.vue"
import SquareFrustumInteractive from "./projections/SquareFrustumInteractive.vue"

import { ref, computed } from 'vue'
import { DoubleSide } from "three";

const hideCube = ref<boolean>(false)
const rotateSolid = ref<boolean>(false)
const picked = ref<string>('cube')
const axis = ref<string>('X')
const resetRotation = ref<boolean>(false)

const currentComponent = computed(() => ({
    'cube': CubeInteractive,
    'cone': ConeInteractive,
    'pyramid': PyramidInteractive,
    'sphere': SphereInteractive,
    'cylinder': CylinderInteractive,
    'conical-frustum': ConicalFrustumInteractive,
    'square-frustum': SquareFrustumInteractive
}[picked.value]))

const bindData = computed(() => ({
    'cube': {
        position: [0, 0, 0],
        hide: !hideCube.value,
        rotate: rotateSolid.value,
        rotationAxis: axis.value,
        resetRotation: resetRotation.value,
    },
    'cone': {
        position: [0, 0, 0],
        hide: !hideCube.value,
        rotate: rotateSolid.value,
        rotationAxis: axis.value,
        resetRotation: resetRotation.value,
    },
    'pyramid': {
        position: [0, 0, 0],
        hide: !hideCube.value,
        rotate: rotateSolid.value,
        rotationAxis: axis.value,
        resetRotation: resetRotation.value,
    },
    'sphere': {
        position: [0, 0, 0],
        hide: !hideCube.value,
        rotate: rotateSolid.value,
        rotationAxis: axis.value,
        resetRotation: resetRotation.value,
    },
    'cylinder': {
        position: [0, 0, 0],
        hide: !hideCube.value,
        rotate: rotateSolid.value,
        rotationAxis: axis.value,
        resetRotation: resetRotation.value,
    },
    'conical-frustum': {
        position: [0, 0, 0],
        hide: !hideCube.value,
        rotate: rotateSolid.value,
        rotationAxis: axis.value,
        resetRotation: resetRotation.value,
    },
    'square-frustum': {
        position: [0, 0, 0],
        hide: !hideCube.value,
        rotate: rotateSolid.value,
        rotationAxis: axis.value,
        resetRotation: resetRotation.value,
    }
}[picked.value]))

</script>

<template>
    <div class="flex justify-evenly">
        <div class="w-1/2 text-center">
            <h5 class="text-sm mt-0 mb-0">Sólido Geométrico</h5>
            <div class="flex flex-wrap w-full max-h-15 gap-3 p-1">
                <div class="flex items-center gap-1 text-xs">
                    <input type="radio" id="cube" value="cube" v-model="picked" />
                    <label for="cube">Cubo</label>
                </div>
                <div class="flex items-center gap-1 text-xs">
                    <input type="radio" id="cone" value="cone" v-model="picked" />
                    <label for="cone">Cone</label>
                </div>
                <div class="flex items-center gap-1 text-xs">
                    <input type="radio" id="pyramid" value="pyramid" v-model="picked" />
                    <label for="pyramid">Pirâmide</label>
                </div>
                <div class="flex items-center gap-1 text-xs">
                    <input type="radio" id="sphere" value="sphere" v-model="picked" />
                    <label for="sphere">Esfera</label>
                </div>
                <div class="flex items-center gap-1 text-xs">
                    <input type="radio" id="cylinder" value="cylinder" v-model="picked" />
                    <label for="cylinder">Cilindro</label>
                </div>
                <div class="flex items-center gap-1 text-xs">
                    <input type="radio" id="conical-frustum" value="conical-frustum" v-model="picked" />
                    <label for="conical-frustum">Tronco de Cone</label>
                </div>
                <div class="flex items-center gap-1 text-xs">
                    <input type="radio" id="square-frustum" value="square-frustum" v-model="picked" />
                    <label for="square-frustum">Tronco de Pirâmide</label>
                </div>
            </div>
        </div>
        <div>
            <h5 class="text-sm mt-0 mb-0">Eixo de Rotação</h5>
            <div class="text-sm">
                <div class="flex items-center gap-1 text-sm">
                    <input type="radio" id="x-axis" value="X" v-model="axis" />
                    <label for="x-axis">Eixo X</label>
                </div>
                <div class="flex items-center gap-1 text-sm">
                    <input type="radio" id="y-axis" value="Y" v-model="axis" />
                    <label for="y-axis">Eixo Y</label>
                </div>
                <div class="flex items-center gap-1 text-sm">
                    <input type="radio" id="z-axis" value="Z" v-model="axis" />
                    <label for="z-axis">Eixo Z</label>
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <label class="relative inline-flex items-center cursor-pointer scale-60">
                <input type="checkbox" :checked="hideCube" v-model="hideCube" class="sr-only peer">
                <div
                    class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                </div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Alternar visibilidade
                </span>
            </label>
            <label class="relative inline-flex items-center cursor-pointer scale-60">
                <input type="checkbox" :checked="rotateSolid" v-model="rotateSolid" class="sr-only peer">
                <div
                    class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                </div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Rotacionar
                </span>
            </label>
            <label class="relative inline-flex items-center cursor-pointer scale-60">
                <input type="checkbox" :checked="resetRotation" v-model="resetRotation" class="sr-only peer">
                <div
                    class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                </div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Zerar rotação
                </span>
            </label>
        </div>
    </div>
    <div style="width: 100%; height: 75%;" border="~ main rounded-lg" overflow-hidden>
        <Renderer :antialias="true" :shadowMapEnabled="true" :alpha="false">
            <OrthographicCamera :position="[10, 10, -20]">
                <OrbitControls />
            </OrthographicCamera>
            <Scene background="#ededed">
                <DirectionalLight :position="[0, 200, 0]" :intensity="2" :cast-shadow="true" />
                <DirectionalLight :position="[0, 5, -200]" :intensity="2" :cast-shadow="true" />
                <DirectionalLight :position="[200, 5, 0]" :intensity="2" :cast-shadow="true" />
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
                <component :is="currentComponent" v-bind="bindData" />
            </Scene>
        </Renderer>
    </div>
</template>

