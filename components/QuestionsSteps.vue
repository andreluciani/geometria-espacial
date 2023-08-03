<script setup>
import QuestionBox from "./QuestionBox.vue"
import { reactive, computed } from "vue"

const emit = defineEmits(['finished'])

const state = reactive({
    step: 0,
    score: 0,
})

const questions = [
    {
        "type": "multiple",
        "difficulty": "hard",
        "question": "Question Statement",
        "correct_answer": "Correct1",
        "incorrect_answers": ["Wrong1", "Wrong2", "Wrong3"]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "question": "Question Statement",
        "correct_answer": "Correct2",
        "incorrect_answers": ["Two words", "And maybe more", "Wrong6"]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "question": "Question Statement",
        "correct_answer": "Correct3",
        "incorrect_answers": ["Wrong7", "Wrong8", "Wrong9"]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "question": "Question Statement",
        "correct_answer": "Correct4",
        "incorrect_answers": ["Wrong10", "Wrong11", "Wrong12"]
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

function nextQuestion(result) {
    if (result === 'correct') {
        state.score++
    }

    if (++state.step === questions.length) {
        emit('finished', {
            score: state.score
        })
    }
}


</script>

<template>
    <div>
        <div>
            <h3>Questão {{ state.step + 1 }} de {{ questions.length }}</h3>
            <QuestionBox @result="nextQuestion" :question="currentQuestion" />
        </div>
    </div>
</template>