<?php 
    include 'CONFIG.PHP';

    // SESSION-GENERATION : 
    session_start();

    // SET, USER-ID :
    $userID = $_SESSION["USER-ID"]; 

    // CHECK, REQUEST-METHOD (POST) : 
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        // USER-SCORE : 
        $userGameScore = mysqli_real_escape_string($connection, $_POST["user-game-score"]);
        // GAME-CATEGORY : 
        $gameCategory = mysqli_real_escape_string($connection, $_POST["game-category"]);

        // CHECK, BOTH SCORE & CATEGORY : 
        if (empty($userGameScore) && empty($gameCategory)) {
            // MESSAGE : 
            echo "EMPTY-DATA";
        }
        else {
            // NOW, CHECK GAME-CATEGORY : 
            if ($gameCategory == 0) {
                // MY-SQL (QUERY) : 
                $updateScoreQuery = mysqli_query($connection, "UPDATE `nexus_quiz_application` SET HTML_AND_CSS_SCORE = '{$userGameScore}' WHERE USER_ID = {$userID}");

                // CHECK, QUERY : 
                if ($updateScoreQuery == true) { 
                    echo "SCORE-UPDATED";
                }
                else {
                    echo "SCORE-NOT-UPDATED";
                }
            }
            elseif ($gameCategory == 1) {
                // MY-SQL (QUERY) : 
                $updateScoreQuery = mysqli_query($connection, "UPDATE `nexus_quiz_application` SET JAVASCRIPT_SCORE = '{$userGameScore}' WHERE USER_ID = {$userID}");

                // CHECK, QUERY : 
                if ($updateScoreQuery == true) { 
                    echo "SCORE-UPDATED";
                }
                else {
                    echo "SCORE-NOT-UPDATED";
                }
            }
            elseif ($gameCategory == 2) {
                // MY-SQL (QUERY) : 
                $updateScoreQuery = mysqli_query($connection, "UPDATE `nexus_quiz_application` SET PYTHON_SCORE = '{$userGameScore}' WHERE USER_ID = {$userID}");

                // CHECK, QUERY : 
                if ($updateScoreQuery == true) { 
                    echo "SCORE-UPDATED";
                }
                else {
                    echo "SCORE-NOT-UPDATED";
                }
            }
            elseif ($gameCategory == 3) {
                // MY-SQL (QUERY) : 
                $updateScoreQuery = mysqli_query($connection, "UPDATE `nexus_quiz_application` SET JAVA_SCORE = '{$userGameScore}' WHERE USER_ID = {$userID}");

                // CHECK, QUERY : 
                if ($updateScoreQuery == true) { 
                    echo "SCORE-UPDATED";
                }
                else {
                    echo "SCORE-NOT-UPDATED";
                }
            }
            elseif ($gameCategory == 4) {
                // MY-SQL (QUERY) : 
                $updateScoreQuery = mysqli_query($connection, "UPDATE `nexus_quiz_application` SET PHP_AND_MY_SQL_SCORE = '{$userGameScore}' WHERE USER_ID = {$userID}");

                // CHECK, QUERY : 
                if ($updateScoreQuery == true) { 
                    echo "SCORE-UPDATED";
                }
                else {
                    echo "SCORE-NOT-UPDATED";
                }
            }
            else {
                echo "SCORE-NOT-UPDATED, SOMETHING WENT WRONG !";
            }
        }
    }
?>