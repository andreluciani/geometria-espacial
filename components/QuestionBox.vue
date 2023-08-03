<script setup>
import { shuffleArray, asyncTimeout } from "./utils"
import { computed, ref, watch, reactive } from "vue"

const emit = defineEmits(['result'])
const props = defineProps({
    question: {
        type: Object,
        required: true
    }
})

const resultVisible = ref(false)
const timer = reactive({
    elapsedTime: 100,
    id: null
})

const answers = computed(() => {
    let list = [
        {
            value: props.question['correct_answer'],
            isCorrect: true
        },
        ...(props.question['incorrect_answers'].map(value => ({
            value,
            isCorrect: false
        })))
    ]
    return shuffleArray(list)
})

watch(() => props.question.question, onUpdateQuestion, {
    immediate: true
})

function onUpdateQuestion() {
    startTimer()
}
function startTimer() {
    if (timer.id === null) {
        timer.id = setInterval(() => {
            if (--timer.elapsedTime <= 0) {
                solve({ isCorrect: false })
            }
        }, 100)
    }
}

function stopTimer() {
    clearInterval(timer.id)
    timer.id = null
    timer.elapsedTime = 100
}

async function solve(answer) {
    stopTimer()
    resultVisible.value = true
    await asyncTimeout(10000)
    resultVisible.value = false

    if (answer.isCorrect) {
        emit('result', 'correct')
    } else {
        emit('result', 'wrong')
    }
}
</script>

<template>
    <div>
        <h4 v-html="props.question.question"></h4>
        <div>
            <div v-for="(answer, _) in     answers    " :key="answer.value" @click="solve(answer)"
                :class="`${resultVisible && answer.isCorrect ? 'bg-green-300' : 'hover:text-cyan-800 hover:bg-gray-100 hover:font-bold cursor-pointer'}`"
                class="flex justify-evenly items-center">
                <p v-html="answer.value"></p>
            </div>
        </div>
        <div>
            <div class="h-full bg-amber-400 transition-all duration-100" :style=" { width: (timer.elapsedTime) + '%' } ">
            </div>
        </div>
    </div>
</template>

<style scoped></style>