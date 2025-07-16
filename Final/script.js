let answeredCorrect = 0;
let currentQuestionIndex = 0;
let questions = [];
let highScore = 0;
let highScoreDisplay;

if (localStorage.getItem("easyHighScore") === null) {
    localStorage.setItem("easyHighScore", 0);
}
if (localStorage.getItem("mediumHighScore") === null) {
    localStorage.setItem("mediumHighScore", 0);
}   
if (localStorage.getItem("hardHighScore") === null) {
    localStorage.setItem("hardHighScore", 0);
}



async function getEasyQuestion() {
    const response = await fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple");
    const data = await response.json();
    console.log(data);
    displayQuestion(data.results[0]);
    questions = data.results;
    return data;
}

async function getMediumQuestion() {
    const response = await fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple");
    const data = await response.json();
    console.log(data);
    displayQuestion(data.results[0]);
    questions = data.results;
    return data;
}

async function getHardQuestion() {
    const response = await fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=hard&type=multiple");
    const data = await response.json();
    console.log(data);
    displayQuestion(data.results[0]);
    questions = data.results;
    return data;
}


function displayQuestion(question) {
    const questionElement = document.getElementById("question-text");
    const answersElement = document.getElementById("options-list");

    questionElement.innerHTML = question.question;
    answersElement.innerHTML = "";
    question.incorrect_answers.forEach(answer => {
        const li = document.createElement("li");
        li.innerHTML = answer;
        li.classList.add("incorrect");
        answersElement.appendChild(li);
    });
    let randomIndex = Math.floor(Math.random() * (question.incorrect_answers.length + 1));
    const correctLi = document.createElement("li");
    correctLi.innerText = question.correct_answer;
    answersElement.insertBefore(correctLi, answersElement.children[randomIndex]);
    correctLi.classList.add("correct");
}

function checkAnswer(event) {
    const selectedAnswer = event.target;
    const correctAnswer = document.querySelector(".correct");
    if (selectedAnswer === correctAnswer) {
        HandleCorrectAnswer();
        selectedAnswer.style.backgroundColor = "#4CAF50"; // Green for correct answer
        setTimeout(() => {
            nextQuestion();
        }, 1000);
    } else {
        selectedAnswer.style.backgroundColor = "#F44336"; // Red for incorrect answer
        correctAnswer.style.backgroundColor = "#4CAF50"; // Green for correct answer
        setTimeout(() => {
            nextQuestion();
        }, 1000);
    }
}


function HandleCorrectAnswer() {
    answeredCorrect++;
    const scoreDisplay = document.getElementById("score-display");
    scoreDisplay.innerText = `${answeredCorrect}/10`;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(questions[currentQuestionIndex]);
    } else {
        finishQuiz();
    }
    const questionNum = document.getElementById("question-num");
    questionNum.innerText = `Question ${currentQuestionIndex + 1}`;
}

function finishQuiz() {
    const triviaContainer = document.getElementById("trivia-container");
    triviaContainer.innerHTML = `<h2 id="quiz-finished">Quiz Finished!</h2>
                                  <p>You answered ${answeredCorrect} out of ${questions.length} questions correctly.</p>
                                  <p>Refresh the page to play again.</p>`
    if (answeredCorrect > highScore) {
        highScore = answeredCorrect;
        localStorage.setItem(`${difficulty}HighScore`, highScore);
        highScoreDisplay.innerText = `${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} High Score: ${highScore}/10`;
    }
}

let difficulty = document.getElementById("main-title").className;

if (difficulty === "easy") {
    getEasyQuestion();
} else if (difficulty === "medium") {
    getMediumQuestion();
} else if (difficulty === "hard") {
    getHardQuestion();
}

document.addEventListener("DOMContentLoaded", () => {
    highScore = localStorage.getItem(`${difficulty}HighScore`) || 0;
    highScoreDisplay = document.getElementById("high-score");
highScoreDisplay.innerHTML = `${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} High Score: ${highScore}/10`;
  const answersElement = document.getElementById("options-list");

  answersElement.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      checkAnswer(event);
    }
  });
});
