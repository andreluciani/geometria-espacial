<script setup>
import ConfettiExplosion from "vue-confetti-explosion";

const emit = defineEmits(['reset'])

const props = defineProps({
    result: {
        type: Object,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
})

const showConfetti = props.result.score === props.total

function reset() {
    emit('reset')
}

</script>

<template>
    <div class="mx-auto p-16 bg-gray-50 text-center lg:max-w-[60%] rounded-xl shadow">
        <div>
            <h2>Resultado</h2>
            <ConfettiExplosion class="absolute z-50 left-40"
                :colors="['#f04848', '#ffd166', '#06d6a0', '#118ab2', '#073b4c']" v-if="showConfetti" />
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