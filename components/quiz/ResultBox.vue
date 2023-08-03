<script setup>

const emit = defineEmits(['reset'])

const props = defineProps({
    result: {
        type: Object,
        required: true
    }
})

function reset() {
    emit('reset')
}

</script>

<template>
    <div class="mx-auto p-16 bg-gray-50 text-center lg:max-w-[60%] rounded-xl shadow">
        <div>
            <h2>Resultado</h2>
            <p>
                Você respondeu
                <strong>{{ props.result.score }}</strong>
                {{ props.result.score === 1 ? 'questão' : 'questões' }} corretamente!
            </p>
        </div>
        <button @click="reset" class="bg-white hover:bg-gray-100 py-2 px-4 border border-gray-400 rounded shadow">
            Reiniciar
        </button>
    </div>
</template>