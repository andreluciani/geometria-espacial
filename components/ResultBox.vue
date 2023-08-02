<script setup>

const props = defineProps({
    result: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <div class="mx-auto p-16 bg-gray-50 lg:max-w-[60%]">
        <div>
            <h2 class="text-2xl mb-16">Resultado</h2>
            <p class="text-xl text-cyan-500">
                Você respondeu
                <b>{{ props.result.score }}</b>
                questões corretamente!
            </p>
        </div>
    </div>
</template>