<?php 
    include 'CONFIG.PHP';

    // SESSION-GENERATION : 
    session_start();

    // CHECK, REQUEST-METHOD (POST) : 
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        // LOGIN-FORM-DATA : 

        // USER-NAME : 
        $username = mysqli_real_escape_string($connection, $_POST["register-username"]);
        // EMAIL-ADDRESS : 
        $email = mysqli_real_escape_string($connection, $_POST["register-email"]);
        // MOBILE-NUMBER : 
        $mobile_number = mysqli_real_escape_string($connection, $_POST["register-mobile"]);
        // PASSWORD : 
        $password = mysqli_real_escape_string($connection, md5($_POST["register-password"]));
        // CONFIRM-PASSWORD : 
        $confirm_password = mysqli_real_escape_string($connection, md5($_POST["register-confirm-password"]));

        // CHECK, ALL (INPUT-FIELD) : 
        if (!empty($username) && !empty($email) && !empty($mobile_number) && !empty($password) && !empty($confirm_password)) {
            // CHECK, 'VAILD-EMAIL-ADDRESS' : 
            if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                // NOW, HERE WE WILL CHECK, ALREADY USER EXISTS OR NOT : 
                $user_exists_query = mysqli_query($connection, "SELECT EMAIL FROM `nexus_quiz_application` WHERE EMAIL = '{$email}'");
                // CHECK,
                if (mysqli_num_rows($user_exists_query) > 0) {
                    // MESSAGE :
                    echo "USER-ALREADY-EXISTS";
                }
                else {
                    // CHECK, VAILD 'MOBILE-NUMBER' : 
                    if (!preg_match("/^\d{10}$/", $mobile_number)) {
                        // MESSAGE : 
                        echo "INVAILD-MOBILE-NUMBER";
                    }
                    else {
                        // NOW, CHECK BOTH PASSWORD & CONFIRM-PASSWORD : 
                        if ($password != $confirm_password) {
                            // MESSAGE
                            echo "PASSWORD-NOT-MATCH";
                        }
                        else {
                            // USER-UNIQUE-ID :
                            $user_unique_id = rand(time(), 1000000);
                            
                            // MY-SQL (INSERT-QUERY) : 
                            $insert_query = mysqli_query($connection, "INSERT INTO `nexus_quiz_application` (USER_ID, USER_NAME, EMAIL, PASSWORD, MOBILE_NUMBER)
                            VALUES ({$user_unique_id}, '{$username}', '{$email}', '{$password}', '{$mobile_number}')");

                            // CHECK, WEATHER (REGISTER-DONE) : 
                            if ($insert_query === true) {
                                $_POST["register-username"] = null;
                                $_POST["register-email"] = null;
                                $_POST["register-mobile"] = null;
                                $_POST["register-password"] = null;
                                $_POST["register-confirm-password"] = null;

                                // MESSAGE :
                                echo "REGISTER-SUCCESSFUL";
                            }
                            else {
                                // MESSAGE : 
                                echo "REGISTER-FAILURE";
                            }
                        }
                    }
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