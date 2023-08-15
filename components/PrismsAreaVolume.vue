<script setup lang="ts">
import {
    Renderer,
    Scene,
    AmbientLight,
    OrbitControls,
    OrthographicCamera,
    Mesh,
    MeshStandardMaterial,
    MeshLambertMaterial,
    PlaneGeometry,
    CylinderGeometry,
    LineSegments,
    EdgesGeometry,
    LineBasicMaterial
} from "@janvorisek/drie";

import { ref, computed } from 'vue'
import { DoubleSide } from "three";

const baseEdgesNum = ref<3 | 4 | 5 | 6 | 7 | 8>(4)
const length = ref<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8>(2)
const height = ref<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8>(3)

const addOrSubtractEdges = (n: number) => {
    baseEdgesNum.value += n
    if (baseEdgesNum.value < 3) {
        baseEdgesNum.value = 3
    }
    if (baseEdgesNum.value > 8) {
        baseEdgesNum.value = 8
    }
}

const addOrSubtractLength = (n: number) => {
    length.value += n
    if (length.value < 1) {
        length.value = 1
    }
    if (length.value > 8) {
        length.value = 8
    }
}

const addOrSubtractHeight = (n: number) => {
    height.value += n
    if (height.value < 1) {
        height.value = 1
    }
    if (height.value > 8) {
        height.value = 8
    }
}

const randomColor = (): string => {
    const colors = [
        // "#f04848",
        // "#ffd166",
        // "#06d6a0",
        "#118ab2",
        // "#073b4c",
    ]
    return colors[Math.floor(Math.random() * colors.length)];
}

const radius = (): number => {
    return length.value / Math.sin(Math.PI / baseEdgesNum.value) / 2
}

const areas = (): { base: number, side: number, total: number } => {
    return {
        base: (length.value ** 2 * baseEdgesNum.value) / (4 * Math.tan(Math.PI / baseEdgesNum.value)),
        side: baseEdgesNum.value * height.value * length.value,
        total: (length.value ** 2 * baseEdgesNum.value) / (4 * Math.tan(Math.PI / baseEdgesNum.value)) * 2 + (baseEdgesNum.value * height.value * length.value)
    }
}

const volume = (): number => {
    return (length.value ** 2 * baseEdgesNum.value) / (4 * Math.tan(Math.PI / baseEdgesNum.value)) * height.value
}

const rotation = (): number[] => {
    if (baseEdgesNum.value % 2 === 0) {
        console.log("GIRAR")
        return [0, Math.PI / 4, 0]
    } else {
        console.log("NAO GIRAR")
    }
    return [0, 0, 0]
}

</script>

<template>
    <div class="flex justify-evenly">
        <div class="w-1/2 text-center">
            <h5 class="text-sm mt-0 mb-0">Características</h5>
            <div class="flex flex-wrap max-h-15 gap-1 p-1 mb-2">
                <div class="flex items-center gap-1 text-xs border rounded-lg">
                    <span m="auto" p="1" class="text-sm">Lados</span>
                    <button border="r main" p="1" font="mono" outline="!none" hover:bg="gray-400 opacity-20"
                        @click="addOrSubtractEdges(-1)">
                        -
                    </button>
                    <span m="auto" p="1">{{ baseEdgesNum }}</span>
                    <button border="l main" p="1" font="mono" outline="!none" hover:bg="gray-400 opacity-20"
                        @click="addOrSubtractEdges(1)">
                        +
                    </button>
                </div>
                <div class="flex items-center gap-1 text-xs border rounded-lg">
                    <span m="auto" p="1" class="text-sm">Medida Lado:</span>
                    <button border="r main" p="1" font="mono" outline="!none" hover:bg="gray-400 opacity-20"
                        @click="addOrSubtractLength(-0.5)">
                        -
                    </button>
                    <span m="auto" p="1">{{ length.toFixed(1) }}</span>
                    <button border="l main" p="1" font="mono" outline="!none" hover:bg="gray-400 opacity-20"
                        @click="addOrSubtractLength(0.5)">
                        +
                    </button>
                </div>
                <div class="flex items-center gap-1 text-xs border rounded-lg">
                    <span m="auto" p="1" class="text-sm">Altura:</span>
                    <button border="r main" p="1" font="mono" outline="!none" hover:bg="gray-400 opacity-20"
                        @click="addOrSubtractHeight(-0.5)">
                        -
                    </button>
                    <span m="auto" p="1">{{ height.toFixed(1) }}</span>
                    <button border="l main" p="1" font="mono" outline="!none" hover:bg="gray-400 opacity-20"
                        @click="addOrSubtractHeight(0.5)">
                        +
                    </button>
                </div>
            </div>
        </div>
        <div>
            <div class="text-sm">
                <h6>Áreas</h6>
                <div class="flex gap-1 text-sm">
                    <span m="auto" p="1">Base: <b>{{ areas().base.toFixed(2) }}</b> u.a.</span>
                    <span m="auto" p="1">Lateral: <b>{{ areas().side.toFixed(2) }}</b> u.a.</span>
                    <span m="auto" p="1">Total: <b>{{ areas().total.toFixed(2) }}</b> u.a.</span>
                </div>
                <h6>Volume</h6>
                <div class="flex gap-1 text-sm">
                    <span m="auto" p="1">Total: <b>{{ volume().toFixed(2) }}</b> u.v.</span>
                </div>
            </div>
        </div>
    </div>
    <div style="width: 100%; height: 70%;" border="~ main rounded-lg" overflow-hidden>
        <Renderer :antialias="true" :shadowMapEnabled="true" :alpha="false">
            <OrthographicCamera :position="[10, 10, 0]">
                <OrbitControls />
            </OrthographicCamera>
            <Scene background="#ededed">
                <AmbientLight :position="[0, 10, 10]" :intensity="3" />
                <!-- Bottom Plane -->
                <Mesh :position="[0, -0.02, 0]" :rotation="[Math.PI / 2, 0, 0]" :receiveShadow="true">
                    <MeshLambertMaterial color="#ffffff" :side="DoubleSide" />
                    <PlaneGeometry :width="20" :height="20" />
                </Mesh>
                <!-- Prism -->
                <Mesh :position="[0, height / 2, 0]" :rotation="rotation()" :castShadow="true">
                    <MeshLambertMaterial :color="randomColor()" />
                    <CylinderGeometry name="prism" :radius-top="radius()" :radius-bottom="radius()" :height="height"
                        :radial-segments="baseEdgesNum" />
                </Mesh>
                <LineSegments :position="[0, height / 2, 0]" :rotation="rotation()">
                    <LineBasicMaterial :color="0x000000" />
                    <EdgesGeometry geometry="prism" />
                </LineSegments>
            </Scene>
        </Renderer>
    </div>
</template>

