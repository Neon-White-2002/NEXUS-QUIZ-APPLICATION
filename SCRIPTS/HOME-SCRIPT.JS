// QUIZ-GAME (JAVA-SCRIPT) : 

// JAVASCRIPT-SOUNDS :

// BUTTON-CLICK (SOUND) :  
const buttonClickedSound = new Audio("IMAGES/SOUNDS/button-sound.mp3");
// RIGHT-ANSWER (SOUND) : 
const correctAnswerSound = new Audio("IMAGES/SOUNDS/correct-answer-sound.mp3");
// WRONG-ANSWER (SOUND) : 
const wrongAnswerSound = new Audio("IMAGES/SOUNDS/wrong-answer-sound.mp3");


// QUIZ-GAME-PLAY (BUTTON) : 
const quizGamePlayButton = document.getElementById("quiz-game-play-button");
quizGamePlayButton.addEventListener("click", () => {
    // GAME-PLAY-BUTTON :
    quizGamePlayButton.style.display = "none";
    // PROFILE-AND-GAME-PLAY :
    profileAndGamePlay.style.display = "none";
    // GAME-PLAY-CONTAINER :
    quizGamePlayConatiner.style.display = "none";
    // GAME-SCORE-CARD : 
    quizGameScoreCard.style.display = "none";
    // GAME-INSTRUCTION : 
    quizGamePlayInstructions.style.display = "flex";

    // BUTTON-CLICK (SOUND) : 
    buttonClickedSound.play();
});

// QUIZ-GAME-PLAY (INSTRUCTION) : 
const quizGamePlayInstructions = document.getElementById("quiz-game-play-instruction");
// EXIT-GAME : 
const exitGameInstructions = document.getElementById("exit-quiz-instruction");
exitGameInstructions.addEventListener("click", () => {
    // GAME-INSTRUCTION : 
    quizGamePlayInstructions.style.display = "none";
    // PROFILE-AND-GAME-PLAY :
    profileAndGamePlay.style.display = "none";
    // GAME-PLAY-CONTAINER :
    quizGamePlayConatiner.style.display = "none";
    // GAME-SCORE-CARD : 
    quizGameScoreCard.style.display = "none";
    // GAME-PLAY-BUTTON :
    quizGamePlayButton.style.display = "flex";

    // BUTTON-CLICK (SOUND) : 
    buttonClickedSound.play();
});
// CONTINUE-GAME : 
const continueGamePlay = document.getElementById("continue-quiz-game");
continueGamePlay.addEventListener("click", () => {
    // GAME-PLAY-BUTTON :
    quizGamePlayButton.style.display = "none";
    // GAME-PLAY-CONTAINER :
    quizGamePlayConatiner.style.display = "none";
    // GAME-INSTRUCTION : 
    quizGamePlayInstructions.style.display = "none";
    // GAME-SCORE-CARD : 
    quizGameScoreCard.style.display = "none";
    // PROFILE-AND-GAME-PLAY :
    profileAndGamePlay.style.display = "flex";

    // BUTTON-CLICK (SOUND) : 
    buttonClickedSound.play();
});

// QUIZ-GAME-PLAY-CONTAINER : 
const quizGamePlayConatiner = document.getElementById("quiz-game-play-container");

// QUIZ-GAME-TITLE : 
const quizGameTitle = document.getElementById("quiz-game-title");
// CURRENT-SECONDS : 
const currentSeconds = document.getElementById("current-seconds");
// PROGRESS-BAR (TIMER) : 
const progressBarLength = document.getElementById("progress-bar-length");

// CURRENT-QUESTION : 
const currentQuestion = document.getElementById("current-question");
// OPTIONS-LIST :
const optionsList = document.getElementById("options-list");

// CURRENT-QUESTION-INDEX : 
const currentQuestionIndex = document.getElementById("current-question-index");
// TOTAL-QUESTION-INDEX : 
const totalQuestionIndex = document.getElementById("total-question-index");

// NEXT-QUESTION-BUTTON : 
const nextQuestionButton = document.getElementById("next-question-button");

// QUIZ-GAME-SCORE-CARD :
const quizGameScoreCard = document.getElementById("quiz-game-score-card"); 
// REPLAY-QUIZ-GAME :
const replayQuizGame = document.getElementById("replay-quiz-game");
replayQuizGame.addEventListener("click", () => {
    // GAME-PLAY-BUTTON :
    quizGamePlayButton.style.display = "none";
    // GAME-PLAY-CONTAINER :
    quizGamePlayConatiner.style.display = "none";
    // GAME-INSTRUCTION : 
    quizGamePlayInstructions.style.display = "none";
    // GAME-SCORE-CARD : 
    quizGameScoreCard.style.display = "none";
    // PROFILE-AND-GAME-PLAY :
    profileAndGamePlay.style.display = "flex";

    // BUTTON-CLICK (SOUND) : 
    buttonClickedSound.play();
});
// EXIT-QUIZ-GAME :
const exitQuizGame = document.getElementById("exit-quiz-game");
exitQuizGame.addEventListener("click", () => {
    // GAME-PLAY-BUTTON :
    quizGamePlayButton.style.display = "flex";
    // GAME-PLAY-CONTAINER :
    quizGamePlayConatiner.style.display = "none";
    // GAME-INSTRUCTION : 
    quizGamePlayInstructions.style.display = "none";
    // GAME-SCORE-CARD : 
    quizGameScoreCard.style.display = "none";
    // PROFILE-AND-GAME-PLAY :
    profileAndGamePlay.style.display = "none";

    // BUTTON-CLICK (SOUND) : 
    buttonClickedSound.play();
});


// QUIZ-GAME (CATEGORY) : 
let gameCategory = 0;
// OPTIONS-BUTTON :
let optionsButton = null;
// QUESTIONS-INDEX :
let categoryIndex = 0;
// TIMER (COUNTER) : 
let counterSeconds = null;
// QUIZ-GAME (sCORE) : 
let gameScore = 0;

// PROFILE-AND-GAME-PLAY : 
const profileAndGamePlay = document.getElementById("profile-and-game-play");
// HTML & CSS (QUIZ-GAME) : 
const htmlAndCss = document.getElementById("html-and-css");
htmlAndCss.addEventListener("click", () => {
    // GAME-PLAY-BUTTON :
    quizGamePlayButton.style.display = "none";
    // GAME-INSTRUCTION : 
    quizGamePlayInstructions.style.display = "none";
    // PROFILE-AND-GAME-PLAY :
    profileAndGamePlay.style.display = "none";
    // GAME-PLAY-CONTAINER :
    quizGamePlayConatiner.style.display = "flex";

    // BUTTON-CLICK (SOUND) : 
    buttonClickedSound.play();

    // QUIZ-GAME (CATEGORY) : 
    gameCategory = 0;

    // DISPLAY, QUIZ-GAME (TITLE) :
    quizGameTitle.innerHTML = `#${quizGameQuestions[gameCategory].category} (QUIZ)`;

    // RE-SET GAME-SCORE (ZERO) : 
    gameScore = 0;

    // CALL, SHOW (QUESTION & OPTIONS) - FUNCTION : 
    showQuestionAndOptions(categoryIndex);

    // CALL, UPDATE-TIMER (FUNCTION) : 
    updateTimerAndProgressBar(20);
});

// JAVA-SCRIPT (QUIZ-GAME) : 
const javascript = document.getElementById("javascript");
javascript.addEventListener("click", () => {
    // GAME-PLAY-BUTTON :
    quizGamePlayButton.style.display = "none";
    // GAME-INSTRUCTION : 
    quizGamePlayInstructions.style.display = "none";
    // PROFILE-AND-GAME-PLAY :
    profileAndGamePlay.style.display = "none";
    // GAME-PLAY-CONTAINER :
    quizGamePlayConatiner.style.display = "flex";

    // BUTTON-CLICK (SOUND) : 
    buttonClickedSound.play();

    // QUIZ-GAME (CATEGORY) : 
    gameCategory = 1;

    // DISPLAY, QUIZ-GAME (TITLE) :
    quizGameTitle.innerHTML = `#${quizGameQuestions[gameCategory].category} (QUIZ)`;

    // RE-SET GAME-SCORE (ZERO) : 
    gameScore = 0;

    // CALL, SHOW (QUESTION & OPTIONS) - FUNCTION : 
    showQuestionAndOptions(categoryIndex);

    // CALL, UPDATE-TIMER (FUNCTION) : 
    updateTimerAndProgressBar(20);
});

// PYTHON (QUIZ-GAME) : 
const python = document.getElementById("python");
python.addEventListener("click", () => {
    // GAME-PLAY-BUTTON :
    quizGamePlayButton.style.display = "none";
    // GAME-INSTRUCTION : 
    quizGamePlayInstructions.style.display = "none";
    // PROFILE-AND-GAME-PLAY :
    profileAndGamePlay.style.display = "none";
    // GAME-PLAY-CONTAINER :
    quizGamePlayConatiner.style.display = "flex";

    // BUTTON-CLICK (SOUND) : 
    buttonClickedSound.play();

    // QUIZ-GAME (CATEGORY) : 
    gameCategory = 2;

    // DISPLAY, QUIZ-GAME (TITLE) :
    quizGameTitle.innerHTML = `#${quizGameQuestions[gameCategory].category} (QUIZ)`;

    // RE-SET GAME-SCORE (ZERO) : 
    gameScore = 0;

    // CALL, SHOW (QUESTION & OPTIONS) - FUNCTION : 
    showQuestionAndOptions(categoryIndex);

    // CALL, UPDATE-TIMER (FUNCTION) : 
    updateTimerAndProgressBar(20);
});

// JAVA (QUIZ-GAME) : 
const java = document.getElementById("java");
java.addEventListener("click", () => {
    // GAME-PLAY-BUTTON :
    quizGamePlayButton.style.display = "none";
    // GAME-INSTRUCTION : 
    quizGamePlayInstructions.style.display = "none";
    // PROFILE-AND-GAME-PLAY :
    profileAndGamePlay.style.display = "none";
    // GAME-PLAY-CONTAINER :
    quizGamePlayConatiner.style.display = "flex";

    // BUTTON-CLICK (SOUND) : 
    buttonClickedSound.play();

    // QUIZ-GAME (CATEGORY) : 
    gameCategory = 3;

    // DISPLAY, QUIZ-GAME (TITLE) :
    quizGameTitle.innerHTML = `#${quizGameQuestions[gameCategory].category} (QUIZ)`;

    // RE-SET GAME-SCORE (ZERO) : 
    gameScore = 0;

    // CALL, SHOW (QUESTION & OPTIONS) - FUNCTION : 
    showQuestionAndOptions(categoryIndex);

    // CALL, UPDATE-TIMER (FUNCTION) : 
    updateTimerAndProgressBar(20);
});

// PHP-AND-MYSQL (QUIZ-GAME) : 
const phpAndMySql = document.getElementById("php-and-mysql");
phpAndMySql.addEventListener("click", () => {
    // GAME-PLAY-BUTTON :
    quizGamePlayButton.style.display = "none";
    // GAME-INSTRUCTION : 
    quizGamePlayInstructions.style.display = "none";
    // PROFILE-AND-GAME-PLAY :
    profileAndGamePlay.style.display = "none";
    // GAME-PLAY-CONTAINER :
    quizGamePlayConatiner.style.display = "flex";

    // BUTTON-CLICK (SOUND) : 
    buttonClickedSound.play();

    // QUIZ-GAME (CATEGORY) : 
    gameCategory = 4;

    // DISPLAY, QUIZ-GAME (TITLE) :
    quizGameTitle.innerHTML = `#${quizGameQuestions[gameCategory].category} (QUIZ)`;

    // RE-SET GAME-SCORE (ZERO) : 
    gameScore = 0;

    // CALL, SHOW (QUESTION & OPTIONS) - FUNCTION : 
    showQuestionAndOptions(categoryIndex);

    // CALL, UPDATE-TIMER (FUNCTION) : 
    updateTimerAndProgressBar(20);
});

// ----- DISPLAY, GAME (cATEGORY) & QUESTION WITH OPTIONS ----- : 
function showQuestionAndOptions(questionIndex) {
    // DISPLAY, QUESTION : 
    currentQuestion.innerHTML = `${quizGameQuestions[gameCategory].questions[questionIndex].questionNumber}. ${quizGameQuestions[gameCategory].questions[questionIndex].currentQuestion}`;

    // DISPLAY, OPTIONS : 
    optionsList.innerHTML = 
    `
        <div class="option">
            <span>${quizGameQuestions[gameCategory].questions[questionIndex].options[0]}</span>
        </div>

        <div class="option">
            <span>${quizGameQuestions[gameCategory].questions[questionIndex].options[1]}</span>
        </div>

        <div class="option">
            <span>${quizGameQuestions[gameCategory].questions[questionIndex].options[2]}</span>
        </div>

        <div class="option">
            <span>${quizGameQuestions[gameCategory].questions[questionIndex].options[3]}</span>
        </div>
    `;

    // DISPLAY, CURRENT-QUESTION-INDEX :
    currentQuestionIndex.innerHTML = `${quizGameQuestions[gameCategory].questions[categoryIndex].questionNumber}` 
    // DISPLAY, TOTAL-QUESTION-INDEX :
    totalQuestionIndex.innerHTML = `${quizGameQuestions[gameCategory].questions.length}`;

    // SET, OPTIONS-BUTTONS : 
    optionsButton = document.querySelectorAll(".option");

    // CHECK, OPTION-EVENT : 
    checkOptionEvent();

    // DISABLE, NEXT-QUESTION-BUTTON : 
    nextQuestionButton.classList.add("disable-next-question-button");
}

// ----- OPTIONS-BUTTONS (EVENT) ----- :
function checkOptionEvent() {
    optionsButton.forEach((button, index) => {
        button.addEventListener("click", () => {
            // USER-SELECTD-OPTION : 
            let userSelectedOption = button.querySelector("span").textContent;
    
            // CHECK, WEATHER SELECTED OPTION IS CORRECT OR NOT : 
            if (userSelectedOption === quizGameQuestions[gameCategory].questions[categoryIndex].correctAnswer) {
                // IF, CORRECT-ANSWER :
    
                // HERE, WE WILL ADD (RIGHT-OPTION) - CLASSLIST :
                button.classList.add("right-option");
                // HERE, WE WILL ADD (RIGHT) - CLASSLIST : 
                button.querySelector("span").classList.add("right");
                // HERE, WE WILL INSERT (CORRECT-ICON) : 
                button.insertAdjacentHTML("beforeend", `${'<i class="fa-regular fa-circle-check"></i>'}`);

                // RIGHT-ANSWER (SOUND) : 
                correctAnswerSound.play();
    
                // NOW, DISABLE ALL THE OPTIONS-BUTTONS : 
                optionsButton.forEach((preButton) => preButton.classList.add("disable-option-button"));
    
                // NON-DISABLE, NEXT-QUESTION-BUTTON : 
                nextQuestionButton.classList.remove("disable-next-question-button");
    
                // HERE, CLEAR-INTERVAL (TIMER) :
                clearInterval(counterSeconds);

                // UPDATE, SCORE : 
                gameScore++;
            }
            else {
                // IF IN-CORRECT ANSWER : 
    
                // HERE, WE WILL ADD (WRONG-OPTION) - CLASSLIST :
                button.classList.add("wrong-option");
                // HERE, WE WILL ADD (WRONG) - CLASSLIST : 
                button.querySelector("span").classList.add("wrong");
                // HERE, WE WILL INSERT (CORRECT-ICON) : 
                button.insertAdjacentHTML("beforeend", `${'<i class="fa-regular fa-circle-xmark"></i>'}`);

                // WRONG-ANSWER (SOUND) : 
                wrongAnswerSound.play();
    
                // NOW, DISABLE ALL THE OPTIONS-BUTTONS : 
                optionsButton.forEach((preButton) => preButton.classList.add("disable-option-button"));
    
                // NON-DISABLE, NEXT-QUESTION-BUTTON : 
                nextQuestionButton.classList.remove("disable-next-question-button");
    
                // HERE, CLEAR-INTERVAL (TIMER) :
                clearInterval(counterSeconds);
            }
        });
    });
}

// ----- QUIZ-GAME (TIMER & PROGRESS-BAR) ----- :
function updateTimerAndProgressBar(seconds) {
    // PROGRESS-BAR (DURATION) : 
    let duration = 20;
    // SECONDS : 
    seconds = duration;
    
    // COUNTER-SECONDS :
    counterSeconds = setInterval(updateTimer, 1000);

    function updateTimer() { 
        // UPDATE, TIME : 
        currentSeconds.innerHTML = seconds;
        // DECREASE-TIMER : 
        seconds--;

        // CALCULATE, PROGRESS : 
        let updateProgress = ((duration - seconds) / duration) * 100;
        // UPDATE, PROGRESS-BAR : 
        progressBarLength.style.width = `${updateProgress}%`;

        // CHECK, WEATHER (TIMER) IS OVER : 
        if (seconds == -1) {
            // UPDATE, TIMER (0 SEC) :
            currentSeconds.innerHTML = 0;
            // HERE, CLEAR-INTERVAL (TIMER) :
            clearInterval(counterSeconds);

            // CALL, CHECK-CORRECT-OPTION (FUNCTION) : 
            checkCorrectOption();
        }
    }
}

// ----- CHECK, CORRECT (OPTION) - FUNCTION ----- :
function checkCorrectOption() {
    // 
    optionsButton.forEach((correctOption, index) => {
        // CORRECT-ANSWER : 
        let correctOptionAnswer = correctOption.querySelector("span").textContent;
        // CORRECT-ANSWER (QUESTION) : 
        let correctQuestionAnswer = quizGameQuestions[gameCategory].questions[categoryIndex].correctAnswer;

        // NOW, CHECK-ANSWER : 
        if (correctOptionAnswer == correctQuestionAnswer) {
            // IF, CORRECT-ANSWER :
    
            // HERE, WE WILL ADD (RIGHT-OPTION) - CLASSLIST :
            correctOption.classList.add("right-option");
            // HERE, WE WILL ADD (RIGHT) - CLASSLIST : 
            correctOption.querySelector("span").classList.add("right");
            // HERE, WE WILL INSERT (CORRECT-ICON) : 
            correctOption.insertAdjacentHTML("beforeend", `${'<i class="fa-regular fa-circle-check"></i>'}`);

            // RIGHT-ANSWER (SOUND) : 
            correctAnswerSound.play();
    
            // NOW, DISABLE ALL THE OPTIONS-BUTTONS : 
            optionsButton.forEach((preButton) => preButton.classList.add("disable-option-button"));

            // NON-DISABLE, NEXT-QUESTION-BUTTON : 
            nextQuestionButton.classList.remove("disable-next-question-button");

            // HERE, CLEAR-INTERVAL (TIMER) :
            clearInterval(counterSeconds);
        }
    });
}

// ----- NEXT-QUESTION (BUTTON) ----- :
nextQuestionButton.addEventListener("click", () => {
    // BUTTON-CLICK (SOUND) : 
    buttonClickedSound.play();
    
    // HERE, WE WILL CHECK (TOTAL-QUESTIONS-INDEX) : 
    if (categoryIndex == quizGameQuestions[gameCategory].questions.length - 1) {
        // CALL, SCORE-CARD (FUNCTION) : 
        showScoreCard();
    }
    else {
        // INCREMENT, NEXT-QUESTION-INDEX : 
        categoryIndex++;

        // CALL, SHOW-QUESTION-AND-OPTIONS (FUNCTION) : 
        showQuestionAndOptions(categoryIndex);

        // CALL, UPDATE-TIMER-FUNCTION : 
        updateTimerAndProgressBar(15);
    }
});

// ----- SCORE-CARD (FUNCTION) ----- :
function showScoreCard() {
    // REMOVE, GAME-PLAY-CONTAINER : 
    quizGamePlayConatiner.style.display = "none";
    // DISPLAY, SCORE-CARD : 
    quizGameScoreCard.style.display = "flex";

    // HERE, WE WILL UPDATE THE SCORE : 
    const quizNameSection = document.querySelector(".quiz-name-section");
    // SCORE-SECTION : 
    const scoreSection = document.querySelector(".score-section");

    // CHECK, SCORE : 
    if (gameScore <= 3) {
        // UPDATE, GAME-NAME-SECTION : 
        quizNameSection.innerHTML = `"You've Completed the <span class="quiz-name">#${quizGameQuestions[gameCategory].category} (QUIZ)</span>" !`;
        // UPDATE, SCORE : 
        scoreSection.innerHTML = `& Your Score are, <span class="total-score">${gameScore}</span> out of <span class="out-of-score">${quizGameQuestions[gameCategory].questions.length}</span> ;) 😐`;
    }
    else if (gameScore <= 7) {
        // UPDATE, GAME-NAME-SECTION : 
        quizNameSection.innerHTML = `"You've Completed the <span class="quiz-name">#${quizGameQuestions[gameCategory].category} (QUIZ)</span>" !`;
        // UPDATE, SCORE : 
        scoreSection.innerHTML = `& Your Score are, <span class="total-score">${gameScore}</span> out of <span class="out-of-score">${quizGameQuestions[gameCategory].questions.length}</span> ;) 🎉`;
    }
    else {
        // UPDATE, GAME-NAME-SECTION : 
        quizNameSection.innerHTML = `"You've Completed the <span class="quiz-name">#${quizGameQuestions[gameCategory].category} (QUIZ)</span>" !`;
        // UPDATE, SCORE : 
        scoreSection.innerHTML = `& Your Score are, <span class="total-score">${gameScore}</span> out of <span class="out-of-score">${quizGameQuestions[gameCategory].questions.length}</span> ;) 😎`;
    }

    // AJAX-CODE (UPDATE-SCORE) INTO DATABASE : 
    updateScoreAJAX();
}

// AJAX-CODE (SCRIPT) : 
function updateScoreAJAX() {
    // AJAX-CODE : 
    let xhr = new XMLHttpRequest();

    // FORM-DATA : 
    let homeFormData = new FormData();
    homeFormData.append("user-game-score", gameScore);
    homeFormData.append("game-category", gameCategory);

    // OPEN, PHP-FILE :
    xhr.open("POST", "PHP/HOME_PAGE.PHP", true);
    xhr.onload = () => {
        // CHECK, READY-STATE : 
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // CHECK, STATUS : 
            if (xhr.status === 200) {
                // PHP-FILE (RESPONSE) : 
                let homePageResponse = xhr.response;
                // RESPONSE : 
                console.log(homePageResponse);
            }
        }
    };

    // SEND, DATA : 
    xhr.send(homeFormData);
}