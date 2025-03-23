<!-- HERE, WE WILL CHECK 'SESSIONS-ID' -->
<?php
    include 'PHP/CONFIG.PHP';

    // GENERATE, SESSIONS : 
    session_start();

    // HERE, WE WILL CHECK, SESSION-ID (GENERATED OR NOT) : 
    if (isset($_SESSION["USER-ID"])) {
        header("location: HOME.PHP");
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
    <title>NEXUS-QUIZ-APPLICATION</title>

    <!-- STYLE-SHEET -->
    <link rel="stylesheet" href="STYLE.CSS">

    <!-- FONT-AWESONE -->
    <script src="https://kit.fontawesome.com/4712b32a59.js" crossorigin="anonymous"></script>
</head>

<body>
    <!-- LOGIN-PAGE -->
    <div class="login-page" id="login-page">
        <!-- LOGIN-PAGE-FORM -->
        <div class="login-form">
            <form action="" method="post" id="login-form" enctype="multipart/form-data">
                <!-- HEADER-TITLE -->
                <div class="header">
                    <i class="fa-solid fa-user-check"></i>
                    <span>'SIGN-IN'</span>
                </div>

                <!-- INPUT-FIELD -->
                <div class="input-field">
                    <i class="fa-solid fa-user"></i>
                    <input type="text" name="login-username" placeholder="USER-NAME" required>
                </div>

                <!-- INPUT-FIELD -->
                <div class="input-field">
                    <i class="fa-solid fa-envelope"></i>
                    <input type="email" name="login-email" placeholder="EMAIL-ADDRESS" required>
                </div>

                <!-- INPUT-FIELD -->
                <div class="input-field">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" name="login-password" placeholder="PASSWORD" required>
                    <i class="fa-solid fa-eye"></i>
                </div>

                <!-- LOGIN-BUTTON -->
                <button id="login-button" name="login-button" type="submit">
                    <i class="fa-solid fa-right-to-bracket"></i>
                    <span>LOGIN</span>
                </button>
            </form>
        </div>

        <!-- REGISTER-PAGE (CONTAINER) -->
        <div class="register-page-container">
            <!-- REGISTER-CONTEXT -->
            <h3>NEW HERE ?</h3>
            <p>Welcome to the "Ultimate Quiz Challenge"! Test your Knowledge across a variety of exciting categories and
                see how much you really know. 'Answer questions', beat the Timer, and Climb the Leaderboard to become
                the
                'Ultimate Quiz Champion'. Whether you're playing SOLO or Challenging Friends, this game will keep you
                Engaged and Entertained. 🧠✨ Are you ready to prove your SKILLS? Click 'LOGIN' and let the challenge
                begin!
            </p>

            <!-- REGISTER-BUTTON -->
            <button id="register-container-button">
                <i class="fa-solid fa-user-plus"></i>
                <span>SIGN-UP</span>
            </button>

            <!-- CONTAINER-IMAGE -->
            <div class="container-image">
                <img src="IMAGES/login-page-container.svg" alt="">
            </div>
        </div>
    </div>

    <!-- REGISTER-PAGE -->
    <div class="register-page" id="register-page">
        <!-- REGISTER-PAGE (CONTAINER) -->
        <div class="login-page-container">
            <!-- REGISTER-CONTEXT -->
            <h3>ONE OF USE ?</h3>
            <p>"Join the Fun & Challenge Yourself with our Exciting QUIZ-GAME ! 🧠✨ Explore a variety of Topics, Track
                your Progress, and compete for the 'Top-Spot'. Test your 'Knowledge' across a variety of exciting
                categories and
                see how much you really know. 'Answer questions', beat the Timer, and Climb the Leaderboard to become
                the
                "Ultimate Quiz Champion". 'SIGN-UP' now and start your journey to becoming a quiz
                MASTER!"
            </p>

            <!-- REGISTER-BUTTON -->
            <button id="login-container-button">
                <i class="fa-solid fa-user-check"></i>
                <span>SIGN-IN</span>
            </button>

            <!-- CONTAINER-IMAGE -->
            <div class="container-image">
                <img src="IMAGES/register-page-container.svg" alt="">
            </div>
        </div>

        <!-- LOGIN-PAGE-FORM -->
        <div class="login-form">
            <form action="" method="post" id="register-form" enctype="multipart/form-data">
                <!-- HEADER-TITLE -->
                <div class="header">
                    <i class="fa-solid fa-user-plus"></i>
                    <span>'SIGN-UP'</span>
                </div>

                <!-- INPUT-FIELD -->
                <div class="input-field">
                    <i class="fa-solid fa-user"></i>
                    <input type="text" name="register-username" id="" placeholder="USER-NAME" required>
                </div>

                <!-- INPUT-FIELD -->
                <div class="input-field">
                    <i class="fa-solid fa-envelope"></i>
                    <input type="email" name="register-email" id="" placeholder="EMAIL-ADDRESS" required>
                </div>

                <!-- INPUT-FIELD -->
                <div class="input-field">
                    <i class="fa-solid fa-phone"></i>
                    <input type="text" name="register-mobile" id="" placeholder="MOBILE-NUMBER" required>
                </div>

                <!-- INPUT-FIELD -->
                <div class="input-field">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" name="register-password" id="" placeholder="PASSWORD" required>
                    <i class="fa-solid fa-eye"></i>
                </div>

                <!-- INPUT-FIELD -->
                <div class="input-field">
                    <i class="fa-solid fa-key"></i>
                    <input type="password" name="register-confirm-password" id="" placeholder="CONFIRM-PASSWORD" required>
                </div>

                <!-- LOGIN-BUTTON -->
                <button id="register-button" name="register-button">
                    <i class="fa-solid fa-right-to-bracket"></i>
                    <span>REGISTER</span>
                </button>
            </form>
        </div>
    </div>

    <!-- MESSAGE-CONTAINER -->
    <div class="message-container" id="message-container">
        <!-- MESSAGE-BODY -->
        <div class="message-body">
            <!-- MESSAGE-INDICATOR -->
            <div class="message-indicator">
                <i class="fa-solid fa-check"></i>
            </div>

            <!-- MESSAGE-TITLE -->
            <div class="message-title">
                "WOW ! <span class="login-successfully">#LOGIN-SUCCESSFULLY...!</span> "
            </div>

            <!-- MESSAGE-SUB-TEXT -->
            <div class="message-sub-text">
                'Welcome to, <span>#NEXUS-QUIZ-APPLICATION...!</span>'
            </div>

            <!-- TIMER-PROGRESS-BAR -->
            <div class="progress-bar-container">
                <div class="progress-bar">
                    <div class="progress-timer" id="progress-timer"></div>
                </div>
            </div>
        </div>
    </div>

    <!-- AJAX (JAVASCRIPT) -->
    <script src="AJAX-SCRIPT/INDEX_AJAX.JS"></script>

    <!-- MAIN-SCRIPT -->
    <script src="SCRIPTS/SCRIPT.JS"></script>
</body>
</html>