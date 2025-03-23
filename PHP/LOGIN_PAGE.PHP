<?php 
    include 'CONFIG.PHP';

    // SESSION-GENERATION : 
    session_start();

    // CHECK, REQUEST-METHOD (POST) : 
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        // LOGIN-FORM-DATA : 

        // USER-NAME : 
        $username = mysqli_real_escape_string($connection, $_POST["login-username"]);
        // EMAIL-ADDRESS : 
        $email = mysqli_real_escape_string($connection, $_POST["login-email"]);
        // PASSWORD : 
        $password = mysqli_real_escape_string($connection, md5($_POST["login-password"]));

        // CHECK, ALL (INPUT-FIELD) : 
        if (!empty($username) && !empty($email) && !empty($password)) {
            // CHECK, 'VAILD-EMAIL-ADDRESS' : 
            if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                // MY-SQL (QUERY) - TO, CHECK USER EXISTS OR NOT : 
                $mysql_query = mysqli_query($connection, "SELECT * FROM `nexus_quiz_application` WHERE USER_NAME = '{$username}' AND EMAIL = '{$email}' AND PASSWORD = '{$password}'");

                // CHECK, WEATHER (USER-EXISTS) : 
                if (mysqli_num_rows($mysql_query) > 0) {
                    // DATA : 
                    $data = mysqli_fetch_assoc($mysql_query);

                    // SET, 'SESSION' AS 'USER-ID' : 
                    $_SESSION["USER-ID"] = $data["USER_ID"];

                    // CLEAR, ALL THE 'INPUT-FIELD' : 
                    $_POST["login-username"] = null;
                    $_POST["login-email"] = null;
                    $_POST["login-password"] = null;

                    // MESSAGE : 
                    echo "LOGIN-SUCCESSFUL";
                }
                else {
                    // MESSAGE : 
                    echo "NO-USER-FOUND";
                }
            }
            else {
                // MESSAGE :
                echo "INVAILD-EMAIL";
            }
        }
        else {
            // MESSAGE : 
            echo "EMPTY-INPUT-FIELD";
        }
    }
?>