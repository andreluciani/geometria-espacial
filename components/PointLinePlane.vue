<script setup lang="ts">
import { Renderer, Scene } from "@janvorisek/drie";
import {
    BufferGeometry,
    OrthographicCamera,
    OrbitControls,
    Points,
    PointsMaterial,
    Line,
    LineBasicMaterial
} from "@janvorisek/drie";
import { ref, Ref, reactive, onMounted } from 'vue'
import {
    SRGBColorSpace,
    CustomBlending,
    TextureLoader as ThreeTextureLoader
} from "three";

const pointMaterialRef = ref<Ref<typeof PointsMaterial> | null>(null)
const assignSRGB = (texture) => {
    texture.colorSpace = SRGBColorSpace;
    texture.sizeAttenuation = true;
};
const textureLoader = new ThreeTextureLoader();
const sprite1 = textureLoader.load('textures/point.png', assignSRGB);

onMounted(() => {
    if (pointMaterialRef.value) {
        const threeMaterial = pointMaterialRef.value.three;
        threeMaterial.map = sprite1;
        threeMaterial.blending = CustomBlending;
        threeMaterial.size = 10;
        threeMaterial.sizeAttenuation = true
    }
});

const lineVertices = reactive<number[]>([
    5, -50, 0,
    10, 50, 0,
]);

</script>

<template>
    <div style="height: 40vh;" flex>
        <div w-xl border="~ main rounded-lg">
            <Renderer :antialias="true">
                <OrthographicCamera :position="[0, 100, 0]" :up="[1, 1, 0]">
                    <OrbitControls :target="[0, 0, 0]" :enableRotate="false" />
                </OrthographicCamera>
                <Scene background="#ffffff">
                    <Points :position="[0, 0, 0]" :rotation="[Math.PI / 2, 0, 0]">
                        <PointsMaterial ref="pointMaterialRef" :color="0x000000" />
                        <BufferGeometry name="point" :vertices="[0, 0, 0]" />
                    </Points>
                </Scene>
            </Renderer>
        </div>
        <div w-xl border="~ main rounded-lg">
            <Renderer :antialias="true">
                <OrthographicCamera :position="[0, 100, 0]" :up="[1, 1, 0]">
                    <OrbitControls :target="[0, 0, 0]" :enableRotate="false" />
                </OrthographicCamera>
                <Scene background="#ffffff">
                    <Line :position="[0, 0.01, 0]" :rotation="[Math.PI / 2, 0, 0]">
                        <LineBasicMaterial :color="0x000000" />
                        <BufferGeometry name="line" :vertices="lineVertices" />
                    </Line>
                </Scene>
            </Renderer>
        </div>
        <div w-xl border="~ main rounded-lg">
            3
        </div>
    </div>
</template>