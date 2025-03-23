// AJAX (JAVA-SCRIPT) : 

// ----- LOGIN & REGISTERATION (AJAX-CODE) ----- :
// MESSAGE-CONTAINER : 
const messageContainer = document.getElementById("message-container");
// MESSAGE-BODY : 
const messageBody = messageContainer.querySelector(".message-body");

// LOGIN-FORM : 
const login_form = document.getElementById("login-form");
// PREVENT, FROM SUBMITTING-FORM : 
login_form.onsubmit = (event) => {
    event.preventDefault();
}

// REGISTER-FORM : 
const register_form = document.getElementById("register-form");
// PREVENT, FROM SUBMITTING-FORM : 
register_form.onsubmit = (event) => {
    event.preventDefault();
}

// LOGIN-BUTTON :  
const loginButton = document.getElementById("login-button");

// LOGIN-BUTTON (AJAX & PHP) : 
loginButton.addEventListener("click", () => {
    // AJAX-CODE :
    let xhr = new XMLHttpRequest(); // XML-OBJECT 
    
    // OPEN, PHP-FILE :
    xhr.open("POST", "PHP/LOGIN_PAGE.PHP", true);
    xhr.onload = () => {
        // CHECK, XMLHTTPREQUEST :
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // CHECK, STATUS-CODE (200) => OK :
            if (xhr.status === 200) {
                // PHP (CODE) - RESPONSE : 
                let responseData = xhr.response;

                // NOW, WE WILL CHECK (RESPONSE) : 
                console.log(responseData);
                if (responseData == "EMPTY-INPUT-FIELD") {
                    // MESSAGE-CONTAINER (DISPLAY) : 
                    messageContainer.style.display = "flex";
                    // MESSAGE-BODY : 
                    messageBody.innerHTML = 
                    `
                    <!-- MESSAGE-INDICATOR -->
                    <div class="message-indicator">
                        <i class="fa-solid fa-exclamation"></i>
                    </div>

                    <!-- MESSAGE-TITLE -->
                    <div class="message-title">
                        "Ohh ! <span class="warning">#EMPTY-FILED...!</span> "
                    </div>

                    <!-- MESSAGE-SUB-TEXT -->
                    <div class="message-sub-text">
                        'Oops ! You Didn't Provide <span>"CREDENTIALS !"</span>'
                    </div>

                    <!-- TIMER-PROGRESS-BAR -->
                    <div class="progress-bar-container">
                        <div class="progress-bar">
                            <div class="progress-timer warning" id="progress-timer"></div>
                        </div>
                    </div>
                    `;

                    // ----- PROGRESS-BAR (TIMER) ----- :
                    
                    // DURATION (PROGRESS-TIMER) :  
                    let duration = 10;
                    // CURRENT-TIMER :
                    let currentTime = duration;
                
                    // PROGRESS-BAR : 
                    const progressBar = document.getElementById("progress-timer");

                    // TIME-INTERVAL : 
                    let timeInterval = setInterval(() => {
                        // DECREASE-TIMER : 
                        currentTime --;

                        // CALCULATE, PROGRESS
                        let progressUpdate = ((duration - currentTime) / duration) * 100;
                        // PROGRESS-BAR :
                        progressBar.style.width = `${progressUpdate}%`;

                        // CLEAR-INTERVAL : 
                        if (currentTime <= 0) {
                            // STOP, INTERVAL :
                            clearInterval(timeInterval);
                            // REDIRECT, TO INDEX-PAGE : 
                            window.location.href = "INDEX.PHP";
                        }
                    }, 1000);
                }
                else if (responseData == "INVAILD-EMAIL") {
                    // MESSAGE-CONTAINER (DISPLAY) : 
                    messageContainer.style.display = "flex";
                    // MESSAGE-BODY : 
                    messageBody.innerHTML = 
                    `
                    <!-- MESSAGE-INDICATOR -->
                    <div class="message-indicator">
                        <i class="fa-solid fa-exclamation"></i>
                    </div>

                    <!-- MESSAGE-TITLE -->
                    <div class="message-title">
                        "Ohh ! <span class="warning">#INVAILD-EMAIL...!</span> "
                    </div>

                    <!-- MESSAGE-SUB-TEXT -->
                    <div class="message-sub-text">
                        'Oops ! You Didn't Provide <span>"VALID-EMAIL-ADDRESS !"</span>'
                    </div>

                    <!-- TIMER-PROGRESS-BAR -->
                    <div class="progress-bar-container">
                        <div class="progress-bar">
                            <div class="progress-timer warning" id="progress-timer"></div>
                        </div>
                    </div>
                    `;

                    // ----- PROGRESS-BAR (TIMER) ----- :
                    
                    // DURATION (PROGRESS-TIMER) :  
                    let duration = 10;
                    // CURRENT-TIMER :
                    let currentTime = duration;
                
                    // PROGRESS-BAR : 
                    const progressBar = document.getElementById("progress-timer");

                    // TIME-INTERVAL : 
                    let timeInterval = setInterval(() => {
                        // DECREASE-TIMER : 
                        currentTime --;

                        // CALCULATE, PROGRESS
                        let progressUpdate = ((duration - currentTime) / duration) * 100;
                        // PROGRESS-BAR :
                        progressBar.style.width = `${progressUpdate}%`;

                        // CLEAR-INTERVAL : 
                        if (currentTime <= 0) {
                            // STOP, INTERVAL :
                            clearInterval(timeInterval);
                            // REDIRECT, TO INDEX-PAGE : 
                            window.location.href = "INDEX.PHP";
                        }
                    }, 1000);
                }
                else if (responseData == "NO-USER-FOUND") {
                    // MESSAGE-CONTAINER (DISPLAY) : 
                    messageContainer.style.display = "flex";
                    // MESSAGE-BODY : 
                    messageBody.innerHTML = 
                    `
                    <!-- MESSAGE-INDICATOR -->
                    <div class="message-indicator">
                        <i class="fa-solid fa-xmark"></i>
                    </div>

                    <!-- MESSAGE-TITLE -->
                    <div class="message-title">
                        "Sorry ! <span class="login-unsuccessfully">#LOGIN-UNSUCCESSFUL...!</span> "
                    </div>

                    <!-- MESSAGE-SUB-TEXT -->
                    <div class="message-sub-text">
                        'Oops ! Seem's Like <span>"NO, USER-EXISTS !"</span>'
                    </div>

                    <!-- TIMER-PROGRESS-BAR -->
                    <div class="progress-bar-container">
                        <div class="progress-bar">
                            <div class="progress-timer login-unsuccessfully" id="progress-timer"></div>
                        </div>
                    </div>
                    `;

                    // ----- PROGRESS-BAR (TIMER) ----- :
                    
                    // DURATION (PROGRESS-TIMER) :  
                    let duration = 10;
                    // CURRENT-TIMER :
                    let currentTime = duration;
                
                    // PROGRESS-BAR : 
                    const progressBar = document.getElementById("progress-timer");

                    // TIME-INTERVAL : 
                    let timeInterval = setInterval(() => {
                        // DECREASE-TIMER : 
                        currentTime --;

                        // CALCULATE, PROGRESS
                        let progressUpdate = ((duration - currentTime) / duration) * 100;
                        // PROGRESS-BAR :
                        progressBar.style.width = `${progressUpdate}%`;

                        // CLEAR-INTERVAL : 
                        if (currentTime <= 0) {
                            // STOP, INTERVAL :
                            clearInterval(timeInterval);
                            // REDIRECT, TO INDEX-PAGE : 
                            window.location.href = "INDEX.PHP";
                        }
                    }, 1000);
                }
                else if (responseData == "LOGIN-SUCCESSFUL") {
                    // MESSAGE-CONTAINER (DISPLAY) : 
                    messageContainer.style.display = "flex";
                    // MESSAGE-BODY : 
                    messageBody.innerHTML = 
                    `
                    <!-- MESSAGE-INDICATOR -->
                    <div class="message-indicator">
                        <i class="fa-solid fa-check"></i>
                    </div>

                    <!-- MESSAGE-TITLE -->
                    <div class="message-title">
                        "Congrat's ! <span class="login-successfully">#LOGIN-SUCCESSFULLY...!</span> "
                    </div>

                    <!-- MESSAGE-SUB-TEXT -->
                    <div class="message-sub-text">
                        'Welcome, to <span>"#NEXUS-QUIZ-APPLICATION !"</span>'
                    </div>

                    <!-- TIMER-PROGRESS-BAR -->
                    <div class="progress-bar-container">
                        <div class="progress-bar">
                            <div class="progress-timer login-successfully" id="progress-timer"></div>
                        </div>
                    </div>
                    `;

                    // ----- PROGRESS-BAR (TIMER) ----- :
                    
                    // DURATION (PROGRESS-TIMER) :  
                    let duration = 10;
                    // CURRENT-TIMER :
                    let currentTime = duration;
                
                    // PROGRESS-BAR : 
                    const progressBar = document.getElementById("progress-timer");

                    // TIME-INTERVAL : 
                    let timeInterval = setInterval(() => {
                        // DECREASE-TIMER : 
                        currentTime --;

                        // CALCULATE, PROGRESS
                        let progressUpdate = ((duration - currentTime) / duration) * 100;
                        // PROGRESS-BAR :
                        progressBar.style.width = `${progressUpdate}%`;

                        // CLEAR-INTERVAL : 
                        if (currentTime <= 0) {
                            // STOP, INTERVAL :
                            clearInterval(timeInterval);
                            // REDIRECT, TO HOME-PAGE :
                            window.location.href = "HOME.PHP"; 
                        }
                    }, 1000);
                }
            }
        }
    };

    // SEND, FORM-DATA :
    let formData = new FormData(login_form);
    xhr.send(formData);
});

// REGISTER-BUTTON : 
const registerButton = document.getElementById("register-button");

// REGISTER-BUTTON (AJAX & PHP) : 
registerButton.addEventListener("click", () => {
    // AJAX-CODE :
    let xhr = new XMLHttpRequest(); // XML-OBJECT 
    
    // OPEN, PHP-FILE :
    xhr.open("POST", "PHP/REGISTER_PAGE.PHP", true);
    xhr.onload = () => {
        // CHECK, XMLHTTPREQUEST :
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // CHECK, STATUS-CODE (200) => OK :
            if (xhr.status === 200) {
                // PHP (CODE) - RESPONSE : 
                let responseData = xhr.response;

                // NOW, WE WILL CHECK (RESPONSE) : 
                console.log(responseData);
                if (responseData == "EMPTY-INPUT-FIELD") {
                    // MESSAGE-CONTAINER (DISPLAY) : 
                    messageContainer.style.display = "flex";
                    // MESSAGE-BODY : 
                    messageBody.innerHTML = 
                    `
                    <!-- MESSAGE-INDICATOR -->
                    <div class="message-indicator">
                        <i class="fa-solid fa-exclamation"></i>
                    </div>

                    <!-- MESSAGE-TITLE -->
                    <div class="message-title">
                        "Ohh ! <span class="warning">#EMPTY-FILED...!</span> "
                    </div>

                    <!-- MESSAGE-SUB-TEXT -->
                    <div class="message-sub-text">
                        'Oops ! You Didn't Provide <span>"CREDENTIALS !"</span>'
                    </div>

                    <!-- TIMER-PROGRESS-BAR -->
                    <div class="progress-bar-container">
                        <div class="progress-bar">
                            <div class="progress-timer warning" id="progress-timer"></div>
                        </div>
                    </div>
                    `;

                    // ----- PROGRESS-BAR (TIMER) ----- :
                    
                    // DURATION (PROGRESS-TIMER) :  
                    let duration = 10;
                    // CURRENT-TIMER :
                    let currentTime = duration;
                
                    // PROGRESS-BAR : 
                    const progressBar = document.getElementById("progress-timer");

                    // TIME-INTERVAL : 
                    let timeInterval = setInterval(() => {
                        // DECREASE-TIMER : 
                        currentTime --;

                        // CALCULATE, PROGRESS
                        let progressUpdate = ((duration - currentTime) / duration) * 100;
                        // PROGRESS-BAR :
                        progressBar.style.width = `${progressUpdate}%`;

                        // CLEAR-INTERVAL : 
                        if (currentTime <= 0) {
                            // STOP, INTERVAL :
                            clearInterval(timeInterval);
                            // REDIRECT, TO INDEX-PAGE : 
                            window.location.href = "INDEX.PHP";
                        }
                    }, 1000);
                }
                else if (responseData == "INVAILD-EMAIL") {
                    // MESSAGE-CONTAINER (DISPLAY) : 
                    messageContainer.style.display = "flex";
                    // MESSAGE-BODY : 
                    messageBody.innerHTML = 
                    `
                    <!-- MESSAGE-INDICATOR -->
                    <div class="message-indicator">
                        <i class="fa-solid fa-exclamation"></i>
                    </div>

                    <!-- MESSAGE-TITLE -->
                    <div class="message-title">
                        "Ohh ! <span class="warning">#INVAILD-EMAIL...!</span> "
                    </div>

                    <!-- MESSAGE-SUB-TEXT -->
                    <div class="message-sub-text">
                        'Oops ! Look Like, <span>"INVALID-EMAIL-ADDRESS !"</span>'
                    </div>

                    <!-- TIMER-PROGRESS-BAR -->
                    <div class="progress-bar-container">
                        <div class="progress-bar">
                            <div class="progress-timer warning" id="progress-timer"></div>
                        </div>
                    </div>
                    `;

                    // ----- PROGRESS-BAR (TIMER) ----- :
                    
                    // DURATION (PROGRESS-TIMER) :  
                    let duration = 10;
                    // CURRENT-TIMER :
                    let currentTime = duration;
                
                    // PROGRESS-BAR : 
                    const progressBar = document.getElementById("progress-timer");

                    // TIME-INTERVAL : 
                    let timeInterval = setInterval(() => {
                        // DECREASE-TIMER : 
                        currentTime --;

                        // CALCULATE, PROGRESS
                        let progressUpdate = ((duration - currentTime) / duration) * 100;
                        // PROGRESS-BAR :
                        progressBar.style.width = `${progressUpdate}%`;

                        // CLEAR-INTERVAL : 
                        if (currentTime <= 0) {
                            // STOP, INTERVAL :
                            clearInterval(timeInterval);
                            // REDIRECT, TO INDEX-PAGE : 
                            window.location.href = "INDEX.PHP";
                        }
                    }, 1000);
                }
                else if (responseData == "PASSWORD-NOT-MATCH") {
                    // MESSAGE-CONTAINER (DISPLAY) : 
                    messageContainer.style.display = "flex";
                    // MESSAGE-BODY : 
                    messageBody.innerHTML = 
                    `
                    <!-- MESSAGE-INDICATOR -->
                    <div class="message-indicator">
                        <i class="fa-solid fa-exclamation"></i>
                    </div>

                    <!-- MESSAGE-TITLE -->
                    <div class="message-title">
                        "Sorry ! <span class="warning">#PASSWORD-ERROR...!</span> "
                    </div>

                    <!-- MESSAGE-SUB-TEXT -->
                    <div class="message-sub-text">
                        'Oops ! Your, <span>"PASSWORD DIDN'T MATCH !"</span>'
                    </div>

                    <!-- TIMER-PROGRESS-BAR -->
                    <div class="progress-bar-container">
                        <div class="progress-bar">
                            <div class="progress-timer warning" id="progress-timer"></div>
                        </div>
                    </div>
                    `;

                    // ----- PROGRESS-BAR (TIMER) ----- :
                    
                    // DURATION (PROGRESS-TIMER) :  
                    let duration = 10;
                    // CURRENT-TIMER :
                    let currentTime = duration;
                
                    // PROGRESS-BAR : 
                    const progressBar = document.getElementById("progress-timer");

                    // TIME-INTERVAL : 
                    let timeInterval = setInterval(() => {
                        // DECREASE-TIMER : 
                        currentTime --;

                        // CALCULATE, PROGRESS
                        let progressUpdate = ((duration - currentTime) / duration) * 100;
                        // PROGRESS-BAR :
                        progressBar.style.width = `${progressUpdate}%`;

                        // CLEAR-INTERVAL : 
                        if (currentTime <= 0) {
                            // STOP, INTERVAL :
                            clearInterval(timeInterval);
                            // REDIRECT, TO INDEX-PAGE : 
                            window.location.href = "INDEX.PHP";
                        }
                    }, 1000);
                }
                else if (responseData == "INVAILD-MOBILE-NUMBER") {
                    // MESSAGE-CONTAINER (DISPLAY) : 
                    messageContainer.style.display = "flex";
                    // MESSAGE-BODY : 
                    messageBody.innerHTML = 
                    `
                    <!-- MESSAGE-INDICATOR -->
                    <div class="message-indicator">
                        <i class="fa-solid fa-exclamation"></i>
                    </div>

                    <!-- MESSAGE-TITLE -->
                    <div class="message-title">
                        "Sorry ! <span class="warning">#IN-VALID PHONE-NUMBER...!</span> "
                    </div>

                    <!-- MESSAGE-SUB-TEXT -->
                    <div class="message-sub-text">
                        'Oops ! 'MOBILE-NUMBER' are, <span>"NOT-CORRECT !"</span>'
                    </div>

                    <!-- TIMER-PROGRESS-BAR -->
                    <div class="progress-bar-container">
                        <div class="progress-bar">
                            <div class="progress-timer warning" id="progress-timer"></div>
                        </div>
                    </div>
                    `;

                    // ----- PROGRESS-BAR (TIMER) ----- :
                    
                    // DURATION (PROGRESS-TIMER) :  
                    let duration = 10;
                    // CURRENT-TIMER :
                    let currentTime = duration;
                
                    // PROGRESS-BAR : 
                    const progressBar = document.getElementById("progress-timer");

                    // TIME-INTERVAL : 
                    let timeInterval = setInterval(() => {
                        // DECREASE-TIMER : 
                        currentTime --;

                        // CALCULATE, PROGRESS
                        let progressUpdate = ((duration - currentTime) / duration) * 100;
                        // PROGRESS-BAR :
                        progressBar.style.width = `${progressUpdate}%`;

                        // CLEAR-INTERVAL : 
                        if (currentTime <= 0) {
                            // STOP, INTERVAL :
                            clearInterval(timeInterval);
                            // REDIRECT, TO INDEX-PAGE : 
                            window.location.href = "INDEX.PHP";
                        }
                    }, 1000);
                }
                else if (responseData == "USER-ALREADY-EXISTS") {
                    // MESSAGE-CONTAINER (DISPLAY) : 
                    messageContainer.style.display = "flex";
                    // MESSAGE-BODY : 
                    messageBody.innerHTML = 
                    `
                    <!-- MESSAGE-INDICATOR -->
                    <div class="message-indicator">
                        <i class="fa-solid fa-xmark"></i>
                    </div>

                    <!-- MESSAGE-TITLE -->
                    <div class="message-title">
                        "Sorry ! <span class="login-unsuccessfully">#REGISTER-UNSUCCESSFUL...!</span> "
                    </div>

                    <!-- MESSAGE-SUB-TEXT -->
                    <div class="message-sub-text">
                        'Oops ! Seem's Like <span>"USER, ALREADY EXISTS !"</span>'
                    </div>

                    <!-- TIMER-PROGRESS-BAR -->
                    <div class="progress-bar-container">
                        <div class="progress-bar">
                            <div class="progress-timer login-unsuccessfully" id="progress-timer"></div>
                        </div>
                    </div>
                    `;

                    // ----- PROGRESS-BAR (TIMER) ----- :
                    
                    // DURATION (PROGRESS-TIMER) :  
                    let duration = 10;
                    // CURRENT-TIMER :
                    let currentTime = duration;
                
                    // PROGRESS-BAR : 
                    const progressBar = document.getElementById("progress-timer");

                    // TIME-INTERVAL : 
                    let timeInterval = setInterval(() => {
                        // DECREASE-TIMER : 
                        currentTime --;

                        // CALCULATE, PROGRESS
                        let progressUpdate = ((duration - currentTime) / duration) * 100;
                        // PROGRESS-BAR :
                        progressBar.style.width = `${progressUpdate}%`;

                        // CLEAR-INTERVAL : 
                        if (currentTime <= 0) {
                            // STOP, INTERVAL :
                            clearInterval(timeInterval);
                            // REDIRECT, TO INDEX-PAGE : 
                            window.location.href = "INDEX.PHP";
                        }
                    }, 1000);
                }
                else if (responseData == "REGISTER-FAILURE") {
                    // MESSAGE-CONTAINER (DISPLAY) : 
                    messageContainer.style.display = "flex";
                    // MESSAGE-BODY : 
                    messageBody.innerHTML = 
                    `
                    <!-- MESSAGE-INDICATOR -->
                    <div class="message-indicator">
                        <i class="fa-solid fa-xmark"></i>
                    </div>

                    <!-- MESSAGE-TITLE -->
                    <div class="message-title">
                        "Sorry ! <span class="login-unsuccessfully">#REGISTER-UNSUCCESSFUL...!</span> "
                    </div>

                    <!-- MESSAGE-SUB-TEXT -->
                    <div class="message-sub-text">
                        'Oops ! Failure, <span>"TRY AGAIN" !</span>'
                    </div>

                    <!-- TIMER-PROGRESS-BAR -->
                    <div class="progress-bar-container">
                        <div class="progress-bar">
                            <div class="progress-timer login-unsuccessfully" id="progress-timer"></div>
                        </div>
                    </div>
                    `;

                    // ----- PROGRESS-BAR (TIMER) ----- :
                    
                    // DURATION (PROGRESS-TIMER) :  
                    let duration = 10;
                    // CURRENT-TIMER :
                    let currentTime = duration;
                
                    // PROGRESS-BAR : 
                    const progressBar = document.getElementById("progress-timer");

                    // TIME-INTERVAL : 
                    let timeInterval = setInterval(() => {
                        // DECREASE-TIMER : 
                        currentTime --;

                        // CALCULATE, PROGRESS
                        let progressUpdate = ((duration - currentTime) / duration) * 100;
                        // PROGRESS-BAR :
                        progressBar.style.width = `${progressUpdate}%`;

                        // CLEAR-INTERVAL : 
                        if (currentTime <= 0) {
                            // STOP, INTERVAL :
                            clearInterval(timeInterval);
                            // REDIRECT, TO INDEX-PAGE : 
                            window.location.href = "INDEX.PHP";
                        }
                    }, 1000);
                }
                else if (responseData == "REGISTER-SUCCESSFUL") {
                    // MESSAGE-CONTAINER (DISPLAY) : 
                    messageContainer.style.display = "flex";
                    // MESSAGE-BODY : 
                    messageBody.innerHTML = 
                    `
                    <!-- MESSAGE-INDICATOR -->
                    <div class="message-indicator">
                        <i class="fa-solid fa-check"></i>
                    </div>

                    <!-- MESSAGE-TITLE -->
                    <div class="message-title">
                        "Yo ! <span class="login-successfully">#REGISTER-SUCCESSFULLY...!</span> "
                    </div>

                    <!-- MESSAGE-SUB-TEXT -->
                    <div class="message-sub-text">
                        'Welcome, to <span>"#NEXUS-QUIZ-APPLICATION !"</span>'
                    </div>

                    <!-- TIMER-PROGRESS-BAR -->
                    <div class="progress-bar-container">
                        <div class="progress-bar">
                            <div class="progress-timer login-successfully" id="progress-timer"></div>
                        </div>
                    </div>
                    `;

                    // ----- PROGRESS-BAR (TIMER) ----- :
                    
                    // DURATION (PROGRESS-TIMER) :  
                    let duration = 10;
                    // CURRENT-TIMER :
                    let currentTime = duration;
                
                    // PROGRESS-BAR : 
                    const progressBar = document.getElementById("progress-timer");

                    // TIME-INTERVAL : 
                    let timeInterval = setInterval(() => {
                        // DECREASE-TIMER : 
                        currentTime --;

                        // CALCULATE, PROGRESS
                        let progressUpdate = ((duration - currentTime) / duration) * 100;
                        // PROGRESS-BAR :
                        progressBar.style.width = `${progressUpdate}%`;

                        // CLEAR-INTERVAL : 
                        if (currentTime <= 0) {
                            // STOP, INTERVAL :
                            clearInterval(timeInterval);
                            // REDIRECT, TO LOGIN-PAGE :
                            window.location.href = "INDEX.PHP"; 
                        }
                    }, 1000);
                }
            }
        }
    };

    // SEND, FORM-DATA :
    let formData = new FormData(register_form);
    xhr.send(formData);
})