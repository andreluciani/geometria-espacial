<script setup>
import QuestionsSteps from "./quiz/QuestionsSteps.vue"
import ResultBox from "./quiz/ResultBox.vue"
import { ref, computed } from "vue"
import quiz1 from "./quiz1.json"

const props = defineProps({
    questionsNumber: {
        type: Number,
        required: true
    }
})

const questions = [quiz1]

const currentStep = ref('questioning')
const currentComponent = computed(() => ({
    'questioning': QuestionsSteps,
    'result': ResultBox
}[currentStep.value]))

const result = ref({})

const bindData = computed(() => ({
    'result': {
        result: result.value
    },
    'questioning': {
        questions: questions[props.questionsNumber - 1]
    }
}[currentStep.value]))

function forwardToResult(res) {
    result.value = res
    currentStep.value = 'result'
}

function resetQuiz() {
    result.value = 0
    currentStep.value = 'questioning'
}
</script>

<template>
    <main>
        <component :is="currentComponent" v-bind="bindData" @finished="forwardToResult" @reset="resetQuiz" />
    </main>
</template>