<script setup>
import { shuffleArray, asyncTimeout } from "./utils"
import { computed, ref, reactive } from "vue"

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

async function solve(answer) {
    if (resultVisible.value) return
    resultVisible.value = true
    await asyncTimeout(3000)
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
            <div v-for="(answer, _) in      answers     " :key="answer.value" @click="solve(answer)"
                :class="`${resultVisible && answer.isCorrect ? 'bg-green-300 overflow: visible' : 'hover:text-cyan-800 hover:bg-gray-100 hover:font-bold cursor-pointer'}`"
                class="flex justify-evenly items-center">
                <div>
                    <p class="z-0" v-html="answer.value"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>