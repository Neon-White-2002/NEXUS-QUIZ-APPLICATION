<!-- HERE, WE WILL CHECK 'SESSIONS-ID' -->
<?php
    include 'PHP/CONFIG.PHP';

    // GENERATE, SESSIONS : 
    session_start();

    // HERE, WE WILL CHECK, SESSION-ID (GENERATED OR NOT) : 
    if (!isset($_SESSION["USER-ID"])) {
        header("location: INDEX.PHP");
    }

    // SET, USER-ID :
    $userID = $_SESSION["USER-ID"]; 

    // HERE, WE WILL RETRIVE-DATA (THROUGH) - SESSION-ID : 
    $dataQuery = mysqli_query($connection, "SELECT * FROM `nexus_quiz_application` WHERE USER_ID = '{$userID}'");
    // CHECK, MY-SQL (QUERY) : 
    if (mysqli_num_rows($dataQuery) > 0) {
        // RETRIEVE-DATA : 
        $userData = mysqli_fetch_assoc($dataQuery);
    }
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- PAGE-LOGO -->
        <link rel="icon" href="IMAGES/quiz-page-logo.png" type="img/icon">

        <!-- PAGE-TITLE -->
        <?php
            echo '<title>#Welcome, @'.'"'.$userData["USER_NAME"].'"'.'</title>'; 
        ?>
        <title>Welcome, '@Neon-White'</title>

        <!-- STYLE-SHEET -->
        <link rel="stylesheet" href="STYLE.CSS">

        <!-- FONT-AWESONE -->
        <script src="https://kit.fontawesome.com/4712b32a59.js" crossorigin="anonymous"></script>
    </head>

    <body>
        <!-- PAGE-BODY -->
        <div class="page-body">
            <!-- QUIZ-GAME-PLAY-BUTTON -->
            <div class="quiz-game-play-button" id="quiz-game-play-button">
                <i class="fa-solid fa-gamepad"></i>
                <span>Start Quiz</span>
            </div>

            <!-- QUIZ-GAME-PLAY-INSTRUCTION -->
            <div class="quiz-game-play-instruction" id="quiz-game-play-instruction">
                <!-- TITLE -->
                <div class="header-title">
                    <i class="fa-solid fa-book-open-reader"></i>
                    <div class="dot"></div>
                    <span>Following's Are Some Rule's for '#QUIZ-APPLICATION'</span>
                </div>

                <!-- RULES -->
                <div class="rules-list">
                    <p>
                        1. You Will Have Only, <span>'20'</span> Second's Per Each Question.
                    </p>

                    <p>
                        2. Once You Select Your Answer, it can't be 'UN-DONE'.
                    </p>

                    <p>
                        3. You can't Select Any Option Once 'TIME' Goes Off.
                    </p>

                    <p>
                        4. You can't 'EXIT' from the 'QUIZ' while you're Playing.
                    </p>

                    <p>
                        5. You'll get 'POINTS' on the Basis of your Correct Answers.
                    </p>
                </div>

                <!-- BUTTONS -->
                <div class="buttons">
                    <!-- EXIT-QUIZ-GAME -->
                    <div id="exit-quiz-instruction">
                        Exit Quiz
                    </div>

                    <!-- CONTINUE-QUIZ -->
                    <div id="continue-quiz-game">
                        Continue Quiz
                    </div>
                </div>
            </div>

            <!-- PROFILE & GAME-PLAY -->
            <div class="profile-and-game-play" id="profile-and-game-play">
                <!-- TITLE -->
                <div class="title">
                    <i class="fa-solid fa-id-card-clip"></i>
                    <div class="dot"></div>
                    <span>Profile</span>
                </div>

                <!-- PROFILE-SECTION -->
                <div class="profile-section" id="profile-section">
                    <!-- PROFILE-PIC -->
                    <div class="profile-pic">
                        <!-- PIC -->
                        <form action="" method="post" name="home-page-form" id="home-page-form" enctype="multipart/form-data">
                            <div class="pic">
                                <?php
                                    // CHECK, PROFILE-PIC (IS-EMPTY) : 
                                    if ($userData["PROFILE_PIC"] == null) {
                                        echo '<img src="IMAGES/UPLOADED-PROFILE-PIC/PROFILE_PIC.PNG" alt="">';
                                    } 
                                    else {
                                        echo '<img src="IMAGES/UPLOADED-PROFILE-PIC/'.$userData["PROFILE_PIC"].'" alt="">';
                                    }
                                ?>

                                <!-- CHNAGE-PROFILE-PIC -->
                                <button id="profile-camera">
                                    <i class="fa-solid fa-camera-retro"></i>
                                </button>
                            </div>
                        </form>
                    </div>

                    <!-- USER-INFO -->
                    <div class="user-info">
                        <!-- USER-NAME -->
                        <?php
                            echo '<p id="user-name">@'.$userData["USER_NAME"].'</p>'; 
                        ?>
                        <!-- USER (EMAIL-ADDRESS) -->
                        <?php
                            echo '<span id="email-address">'.$userData["EMAIL"].'</span>'; 
                        ?>
                    </div>

                    <!-- QUIZ-GAME-PLAY-OPTIONS -->
                    <div class="quiz-game-play-options">
                        <!-- QUIZ-GAME-PLAY-OPTION-BUTTON -->
                        <div class="quiz-game-option-button" id="html-and-css">
                            <!-- QUIZ-GAME-IMAGE -->
                            <div class="quiz-game-image">
                                <img src="IMAGES/html-and-css.png" alt="">
                            </div>

                            <!-- QUIZ-GAME-TITLE -->
                            <div class="quiz-game-title">
                                Score :
                            </div>

                            <!-- QUIZ-GAME-SCORE -->
                            <div class="quiz-game-score">
                                <?php
                                    if ($userData["HTML_AND_CSS_SCORE"] == null) {
                                        echo '0 / 10'; 
                                    }
                                    else {
                                        echo $userData["HTML_AND_CSS_SCORE"].' / 10'; 
                                    }
                                ?>
                            </div>
                        </div>

                        <!-- QUIZ-GAME-PLAY-OPTION-BUTTON -->
                        <div class="quiz-game-option-button" id="javascript">
                            <!-- QUIZ-GAME-IMAGE -->
                            <div class="quiz-game-image">
                                <img src="IMAGES/javascript.png" alt="">
                            </div>

                            <!-- QUIZ-GAME-TITLE -->
                            <div class="quiz-game-title">
                                Score :
                            </div>

                            <!-- QUIZ-GAME-SCORE -->
                            <div class="quiz-game-score">
                                <?php
                                    if ($userData["JAVASCRIPT_SCORE"] == null) {
                                        echo '0 / 10'; 
                                    }
                                    else {
                                        echo $userData["JAVASCRIPT_SCORE"].' / 10'; 
                                    }
                                ?>
                            </div>
                        </div>

                        <!-- QUIZ-GAME-PLAY-OPTION-BUTTON -->
                        <div class="quiz-game-option-button" id="python">
                            <!-- QUIZ-GAME-IMAGE -->
                            <div class="quiz-game-image">
                                <img src="IMAGES/python.png" alt="">
                            </div>

                            <!-- QUIZ-GAME-TITLE -->
                            <div class="quiz-game-title">
                                Score :
                            </div>

                            <!-- QUIZ-GAME-SCORE -->
                            <div class="quiz-game-score">
                                <?php
                                    if ($userData["PYTHON_SCORE"] == null) {
                                        echo '0 / 10'; 
                                    }
                                    else {
                                        echo $userData["PYTHON_SCORE"].' / 10'; 
                                    }
                                ?>
                            </div>
                        </div>

                        <!-- QUIZ-GAME-PLAY-OPTION-BUTTON -->
                        <div class="quiz-game-option-button" id="java">
                            <!-- QUIZ-GAME-IMAGE -->
                            <div class="quiz-game-image">
                                <img src="IMAGES/java.png" alt="">
                            </div>

                            <!-- QUIZ-GAME-TITLE -->
                            <div class="quiz-game-title">
                                Score :
                            </div>

                            <!-- QUIZ-GAME-SCORE -->
                            <div class="quiz-game-score">
                                <?php
                                    if ($userData["JAVA_SCORE"] == null) {
                                        echo '0 / 10'; 
                                    }
                                    else {
                                        echo $userData["JAVA_SCORE"].' / 10'; 
                                    }
                                ?>
                            </div>
                        </div>

                        <!-- QUIZ-GAME-PLAY-OPTION-BUTTON -->
                        <div class="quiz-game-option-button" id="php-and-mysql">
                            <!-- QUIZ-GAME-IMAGE -->
                            <div class="quiz-game-image">
                                <img src="IMAGES/php-and-mysql.png" alt="">
                            </div>

                            <!-- QUIZ-GAME-TITLE -->
                            <div class="quiz-game-title">
                                Score :
                            </div>

                            <!-- QUIZ-GAME-SCORE -->
                            <div class="quiz-game-score">
                                <?php
                                    if ($userData["PHP_AND_MY_SQL_SCORE"] == null) {
                                        echo '0 / 10'; 
                                    }
                                    else {
                                        echo $userData["PHP_AND_MY_SQL_SCORE"].' / 10'; 
                                    }
                                ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- QUIZ-GAME-PLAY -->
            <div id="quiz-game-play-container" id="quiz-game-play-container">
                <!-- TITLE -->
                <div class="title">
                    <i class="fa-solid fa-brain"></i>
                    <div class="dot"></div>
                    <p>
                        ' Welcome to, <span id="quiz-game-title">"#HTML & CSS (QUIZ)"</span> '
                    </p>

                    <!-- QUIZ-TIMER -->
                    <div class="quiz-timer">
                        <!-- CURRENT-SECONDS -->
                        <i class="fa-solid fa-stopwatch"></i>
                        <div class="curren-seconds">
                            <span id="current-seconds">15</span>
                        </div>
                    </div>

                    <!-- PROGRESS-BAR (TIMER) -->
                    <div class="timer-progress-bar">
                        <!-- PROGRESS-BAR-BACKGROUND -->
                        <div class="progress-bar-background">
                            <!-- PROGRESS-BAR-LENGTH -->
                            <div class="progress-bar-length" id="progress-bar-length"></div>
                        </div>
                    </div>
                </div>

                <!-- OPTIONS -->
                <div class="options">
                    <!-- QUESTION-SECTION -->
                    <div class="question" id="current-question">
                        1. What Does 'HTML', Stands For ?
                    </div>

                    <!-- OPTION-LIST -->
                    <div class="options-list" id="options-list">
                        <div class="option right-option">
                            <span class="right">Hyper Text Markup Language</span>
                            <i class="fa-regular fa-circle-check"></i>
                        </div>

                        <div class="option wrong-option">
                            <span class="wrong">Hyper Text Markup Language</span>
                            <i class="fa-regular fa-circle-xmark"></i>
                        </div>

                        <div class="option">
                            <span>Hyper Text Markup Language</span>
                        </div>

                        <div class="option">
                            <span>Hyper Text Markup Language</span>
                        </div>
                    </div>
                </div>

                <!-- DIVIDER -->
                <div class="divider"></div>

                <!-- CURRENT-QUESTION & NEXT-QUESTION -->
                <div class="current-question-container">
                    <!-- CURRENT-QUESTION-COUNTER -->
                    <div class="current-question-counter">
                        <span id="current-question-index">1</span> of <span id="total-question-index">10</span> Question's
                    </div>

                    <!-- NEXT-QUESTION-BUTTON -->
                    <div class="next-question-button" id="next-question-button">
                        <i class="fa-solid fa-forward"></i>
                        <span>Next Question</span>
                    </div>
                </div>
            </div>

            <!-- QUIZ-GAME (SCORE-CARD) -->
            <div class="quiz-game-score-card" id="quiz-game-score-card">
                <!-- QUIZ-GAME (LOGO) -->
                <div class="quiz-game-logo">
                    <img src="IMAGES/game-logo.png" alt="">
                </div>

                <!-- USER-INFO-AND-SCORE -->
                <div class="user-info-and-score">
                    <!-- PHP (USER-NAME) -->
                    <?php
                        echo '<p class="username-section">#Congrats, <span class="username">@'.$userData["USER_NAME"].'.</span></p>'; 
                    ?>

                    <p class="quiz-name-section">"You've Completed the <span class="quiz-name">#HTML & CSS (QUIZ)</span>" !</p>

                    <p class="score-section">& Your Score are, <span class="total-score">10</span> out of <span class="out-of-score">10</span> ;)</p>
                </div>

                <!-- QUIZ-GAME (BUTTONS) -->
                <div class="quiz-game-score-card-buttons">
                    <!-- RE-PLAY QUIZ -->
                    <div id="replay-quiz-game">
                        <i class="fa-solid fa-reply-all"></i>
                        <span>Replay Quiz</span>
                    </div>

                    <!-- EXIT-QUIZ-GAME -->
                    <div id="exit-quiz-game">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        <span>Exit Quiz</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- MAIN-SCRIPT -->

        <!-- QUESTION's-SCRIPT -->
        <script src="SCRIPTS/QUIZ-GAMES-QUESTIONS.JS"></script>
        <!-- HOME-PAGE (sCRIPT) -->
        <script src="SCRIPTS/HOME-SCRIPT.JS"></script>
    </body>
</html>