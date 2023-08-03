<script setup>
import QuestionsSteps from "./QuestionsSteps.vue"
import ResultBox from "./ResultBox.vue"
import { ref, computed } from "vue"

const currentStep = ref('questioning')
const currentComponent = computed(() => ({
    'questioning': QuestionsSteps,
    'result': ResultBox
}[currentStep.value]))

const result = ref({})

const bindData = computed(() => ({
    'result': {
        result: result.value
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