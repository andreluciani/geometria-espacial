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
    Group,
    Line,
    Points,
    PointsMaterial,
} from "@janvorisek/drie";
import { ref, Ref, reactive, onMounted } from 'vue'
import {
    DoubleSide,
    SRGBColorSpace,
    CustomBlending,
    TextureLoader as ThreeTextureLoader
} from "three";

const lineVertices = reactive<number[]>([
    5, -50, 0,
    10, 50, 0,
]);

const lineTwoVertices = reactive<number[]>([
    10, -50, 0,
    -15, 50, 0,
]);

const pointMaterialRef = ref<Ref<typeof PointsMaterial> | null>(null)
const pointTwoMaterialRef = ref<Ref<typeof PointsMaterial> | null>(null)
const assignSRGB = (texture) => {
    texture.colorSpace = SRGBColorSpace;
};
const textureLoader = new ThreeTextureLoader();
const sprite1 = textureLoader.load('textures/point.png', assignSRGB);

onMounted(() => {
    if (pointMaterialRef.value) {
        const threeMaterial = pointMaterialRef.value.three;
        threeMaterial.map = sprite1;
        threeMaterial.blending = CustomBlending;
        threeMaterial.size = 4;
    }
    if (pointTwoMaterialRef.value) {
        const threeMaterial = pointTwoMaterialRef.value.three;
        threeMaterial.map = sprite1;
        threeMaterial.blending = CustomBlending;
        threeMaterial.size = 4;
    }
});

</script>

<template>
    <div style="width: 70vh; height: 40vh;" border="~ main rounded-lg" overflow-hidden>
        <Renderer :antialias="true">
            <OrthographicCamera :position="[0, 100, 0]" :up="[1, 1, 0]">
                <OrbitControls :target="[0, 0, 0]" :enableRotate="false" />
            </OrthographicCamera>
            <Scene background="#ffffff">
                <AmbientLight :position="[0, 4, 4]" :intensity="1" />
                <!-- Base Plane -->
                <Mesh :position="[0, 0, 0]" :rotation="[Math.PI / 2, 0, 0]">
                    <MeshBasicMaterial color="#ededed" :side="DoubleSide" />
                    <PlaneGeometry :width="100" :height="100" />
                </Mesh>
                <Group>
                    <Group>
                        <!-- Square -->
                        <Mesh :position="[0, 0.01, 11]" :rotation="[-Math.PI / 2, 0, -Math.PI / 4]">
                            <LineBasicMaterial color="#f04848" :side="DoubleSide"  />
                            <CircleGeometry name="square" :radius="4" :segments="4" />
                        </Mesh>
                        <LineSegments :position="[0, 0.01, 11]" :rotation="[-Math.PI / 2, 0, -Math.PI / 4]">
                            <LineBasicMaterial color="black" />
                            <EdgesGeometry geometry="square" />
                        </LineSegments>
                    </Group>
                    <Group>
                        <!-- Circle -->
                        <Mesh :position="[3, 0.01, 3]" :rotation="[-Math.PI / 2, 0, 0]">
                            <MeshBasicMaterial color="#ffd166" :side="DoubleSide"  />
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
                            <MeshBasicMaterial color="#06d6a0" :side="DoubleSide"  />
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
                            <MeshBasicMaterial color="#118ab2" :side="DoubleSide"  />
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
                            <LineBasicMaterial :color="0x073b4c" />
                            <BufferGeometry name="lineTwo" :vertices="lineTwoVertices" />
                        </Line>
                    </Group>
                    <Group>
                        <!-- Point -->
                        <Points :position="[0, 0.3, 0]" :rotation="[Math.PI / 2, 0, 0]">
                            <PointsMaterial ref="pointMaterialRef" :color="0x000000" />
                            <BufferGeometry name="point" :vertices="[-0.5, -0.5, -0.5]" />
                        </Points>
                        <Points :position="[0, 0.3, 0]" :rotation="[Math.PI / 2, 0, 0]">
                            <PointsMaterial ref="pointTwoMaterialRef" :color="0x000000" />
                            <BufferGeometry name="pointTwo" :vertices="[8.5, -8.5, 0]" />
                        </Points>
                    </Group>
                    <Group>
                        <!-- Ciircunference -->
                        <Mesh :position="[-5, 0.01, -12]" :rotation="[-Math.PI / 2, 0, 0]">
                            <MeshBasicMaterial :transparent="true" :opacity="0" />
                            <CircleGeometry name="circunference" :radius="2" />
                        </Mesh>
                        <LineSegments :position="[-5, 0.01, -12]" :rotation="[-Math.PI / 2, 0, 0]">
                            <LineBasicMaterial color="black" />
                            <EdgesGeometry geometry="circunference" />
                        </LineSegments>
                    </Group>
                    <Group>
                        <!-- Triangle -->
                        <Mesh :position="[3, 0.01, -10]" :rotation="[-Math.PI / 2, 0, -Math.PI * 2]">
                            <LineBasicMaterial color="#073b4c" :side="DoubleSide"  />
                            <CircleGeometry name="triangle" :radius="3" :segments="3" />
                        </Mesh>
                        <LineSegments :position="[3, 0.01, -10]" :rotation="[-Math.PI / 2, 0, -Math.PI * 2]">
                            <LineBasicMaterial color="black" />
                            <EdgesGeometry geometry="triangle" />
                        </LineSegments>
                    </Group>
                </Group>
            </Scene>
        </Renderer>
    </div>
</template>

