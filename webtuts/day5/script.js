const questions = [
    { question: "12 x 6 = ...", answer: 72 },
    { question: "26 - 7 = ...", answer: 19 },
    { question: "15 + 23 = ...", answer: 38 },
    { question: "8 x 9 = ...", answer: 72 },
    { question: "54 ÷ 6 = ...", answer: 9 },
    { question: "13 x 3 = ...", answer: 39 },
    { question: "48 ÷ 8 = ...", answer: 6 },
    { question: "25 + 17 = ...", answer: 42 },
    { question: "36 - 14 = ...", answer: 22 },
    { question: "7 x 8 = ...", answer: 56 }
];

const userAnswers = [];

for (let i = 0; i < questions.length; i++) {
    let userAnswer = parseInt(prompt(`Question ${i+1}: ${questions[i].question}`));
    userAnswers.push(userAnswer);
}

for (let i = 0; i < questions.length; i++) {
    document.getElementById(`question${i+1}`).textContent = questions[i].question;
    document.getElementById(`answer${i+1}`).textContent = userAnswers[i];

    let feedbackElement = document.getElementById(`feedback${i+1}`);
    if (userAnswers[i] === questions[i].answer) {
        feedbackElement.innerHTML = `Correct! &checkmark;`;
        feedbackElement.classList.add('correct');
    } else {
        feedbackElement.innerHTML = `Incorrect. &cross; The correct answer is ${questions[i].answer}`;
        feedbackElement.classList.add('incorrect');
    }
}