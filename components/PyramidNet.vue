<script setup lang="ts">
import {
    Renderer,
    Scene,
    AmbientLight,
    OrbitControls,
    OrthographicCamera,
    Mesh,
    MeshLambertMaterial,
    PlaneGeometry
} from "@janvorisek/drie";
import RectangularPyramidNet from "./pyramid/RectangularPyramidNet.vue";

import { ref } from 'vue'
import { DoubleSide } from "three";

const plan = ref<boolean>(false)
const resetPlan = ref<boolean>(false)

</script>

<template>
    <div class="flex justify-evenly">
        <div class="flex">
            <label class="relative inline-flex items-center cursor-pointer scale-60">
                <input type="checkbox" :checked="plan" v-model="plan" class="sr-only peer">
                <div
                    class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                </div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Planificar
                </span>
            </label>
            <label class="relative inline-flex items-center cursor-pointer scale-60">
                <input type="checkbox" :checked="resetPlan" v-model="resetPlan" class="sr-only peer">
                <div
                    class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                </div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Zerar planificação
                </span>
            </label>
        </div>
    </div>
    <div style="width: 100%; height: 75%;" border="~ main rounded-lg" overflow-hidden>
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
                <RectangularPyramidNet :position="[2, 0, -2]" :plan="plan.valueOf()" :resetPlan="resetPlan.valueOf()" />
            </Scene>
        </Renderer>
    </div>
</template>

