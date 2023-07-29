<script setup lang="ts">
import { Renderer, Scene } from "@janvorisek/drie";
import {
    BufferGeometry,
    OrthographicCamera,
    OrbitControls,
    Points,
    PointsMaterial,
    Line,
    LineBasicMaterial,
    Mesh,
    MeshBasicMaterial,
    PlaneGeometry,
    LineSegments,
    EdgesGeometry
} from "@janvorisek/drie";
import { ref, Ref, reactive, onMounted } from 'vue'
import {
    DoubleSide,
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
    -5, -5, 0,
    5, 5, 0,
]);

</script>

<template>
    <div style="height: 38vh;" flex>
        <div m-1 w-xl border="~ main rounded-lg"  overflow-hidden>
            <div class="position-relative" style="top: 210px; left: 125px;">A</div>
            <Renderer :antialias="true">
                <OrthographicCamera :position="[0, 100, 0]" :up="[1, 1, 0]">
                    <OrbitControls :target="[0, 0, 0]" :enableRotate="false" :enablePan="false" />
                </OrthographicCamera>
                <Scene background="#ffffff">
                    <Points :position="[0, 0, 0]" :rotation="[Math.PI / 2, 0, 0]">
                        <PointsMaterial ref="pointMaterialRef" :color="0x000000" />
                        <BufferGeometry name="point" :vertices="[0, 0, 0]" />
                    </Points>
                </Scene>
            </Renderer>
        </div>
        <div m-1 w-xl border="~ main rounded-lg"  overflow-hidden>
            <div class="position-relative" style="top: 150px; left: 200px;">r</div>
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
        <div m-1 w-xl border="~ main rounded-lg"  overflow-hidden>
            <div class="position-relative" style="top: 300px; left: 200px;">β</div>
            <Renderer :antialias="true">
                <OrthographicCamera :position="[10, 90, 120]">
                    <OrbitControls />
                </OrthographicCamera>
                <Scene background="#ffffff">
                    <Mesh :position="[0, 0, 0]" :rotation="[Math.PI / 2, 0, 0]">
                        <MeshBasicMaterial color="#ccffcc" :side="DoubleSide" />
                        <PlaneGeometry name="plane" :width="10" :height="10" />
                        <!-- <GridHelper :position="[0, 0, 0]" :size="20" :divisions="20" /> -->
                    </Mesh>
                    <LineSegments :position="[0, 0, 0]" :rotation="[-Math.PI / 2, 0, 0]">
                        <LineBasicMaterial color="black" />
                        <EdgesGeometry geometry="plane" />
                    </LineSegments>
                </Scene>
            </Renderer>
        </div>
    </div>
</template>