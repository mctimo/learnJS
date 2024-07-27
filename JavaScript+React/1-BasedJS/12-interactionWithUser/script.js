'use strict';

// const result = confirm("Are you here?");

// const answer = prompt("How old are you?", "18")
// console.log(answer)

const answers = []
const questions = ['Ваше имя?', 'Ваша фамилия?', 'Сколько вам лет?']

for (let i = 0; i < questions.length; i++) {
    answers[i] = prompt(questions[i]);
}

console.log(answers);
document.write(answers);