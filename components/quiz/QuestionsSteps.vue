<script setup>
import QuestionBox from "./QuestionBox.vue"
import { reactive, computed } from "vue"

const emit = defineEmits(['finished'])

const props = defineProps({
    questions: {
        type: Object,
        required: true
    }
})

const state = reactive({
    step: 0,
    score: 0,
})

const currentQuestion = computed(() => (props.questions[state.step]))

function nextQuestion(result) {
    if (result === 'correct') {
        state.score++
    }

    if (++state.step === props.questions.length) {
        emit('finished', {
            score: state.score
        })
    }
}


</script>

<template>
    <div>
        <div>
            <h3>Questão {{ state.step + 1 }} de {{ props.questions.length }}</h3>
            <QuestionBox @result="nextQuestion" :question="currentQuestion" />
        </div>
    </div>
</template>