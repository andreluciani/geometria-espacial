<script setup>
import QuestionBox from "./QuestionBox.vue"
import { reactive, onMounted, computed } from "vue"
import { subtractDates } from "./utils"

const emit = defineEmits(['finished'])

const state = reactive({
    step: 0,
    score: 0,
    isLoading: false,
    startTime: null
})

const questions = [
    {
        "type": "multiple",
        "difficulty": "hard",
        "question": "Question Statement",
        "correct_answer": "Correct",
        "incorrect_answers": ["Wrong", "Wrong", "Wrong"]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "question": "Question Statement",
        "correct_answer": "Correct",
        "incorrect_answers": ["Wrong", "Wrong", "Wrong"]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "question": "Question Statement",
        "correct_answer": "Correct",
        "incorrect_answers": ["Wrong", "Wrong", "Wrong"]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "question": "Question Statement",
        "correct_answer": "Correct",
        "incorrect_answers": ["Wrong", "Wrong", "Wrong"]
    },
    {
        "type": "boolean",
        "difficulty": "easy",
        "question": "Question Statement",
        "correct_answer": "True",
        "incorrect_answers": ["False"]
    },
]
const currentQuestion = computed(() => (questions[state.step]))

onMounted(async () => {
    state.isLoading = false
    state.startTime = new Date()
})

function nextQuestion(result) {
    if (result === 'correct') {
        state.score++
    }

    if (++state.step === questions.length) {
        emit('finished', {
            score: state.score,
            time: subtractDates(state.startTime, new Date())
        })
    }
}


</script>

<template>
    <div>
        <div>
            <h2>Question #{{ state.step + 1 }} </h2>
            <QuestionBox @result="nextQuestion" :question="currentQuestion" />
        </div>
    </div>
</template>