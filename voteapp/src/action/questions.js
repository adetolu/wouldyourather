
export function getQuestions (questions) {
//    console.log(questions)
    return {
        type: 'GET_QUESTIONS',
        payload: questions
    }
}
