// JAVA-SCRIPT :

// ----- LOGIN & REGISTER (PAGE) - SCRIPT ----- :
// LOGIN-PAGE & SIGN-IN (BUTTON) :
const sign_in_button = document.getElementById("login-container-button");
const login_page = document.getElementById("login-page");

// REGISTER-PAGE & SIGN-UP (BUTTON) :
const sign_up_button = document.getElementById("register-container-button");
const register_page = document.getElementById("register-page");

// SIGN-UP (BUTTON) - REGISTER :
sign_up_button.addEventListener("click", () => {
    login_page.style.display = "none";
    register_page.style.display = "flex";
});

// SIGN-IN (BUTTON) - LOGIN :
sign_in_button.addEventListener("click", () => {
    register_page.style.display = "none";
    login_page.style.display = "flex";
});

// ----- PASSWORD (SEEN & UNSEEN) - SCRIPT ----- :
// PASSWORD (INPUT-FIELD) EYE-ICON : 

const eye_icon = document.querySelectorAll(".input-field i.fa-eye");
// EVENT-HANDLER : 
eye_icon.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        // GETTING, THE CLOEST (INPUT-FIELD - PASSWORD) : 
        const input_field = icon.closest(".input-field").querySelector("input");

        // HERE, WE CHECK (ICON - CLASS-LIST) : 
        if (icon.classList.contains("fa-eye")) {
            // CHANGE, INPUT-FIELD (TYPE) : 
            input_field.type = "text";
            // REPLACE, ICON-CLASS-LIST :
            icon.classList.replace("fa-eye", "fa-eye-slash");
        }
        else {
            // CHANGE, INPUT-FIELD (TYPE) : 
            input_field.type = "password";
            // REPLACE, ICON-CLASS-LIST :
            icon.classList.replace("fa-eye-slash", "fa-eye");
        }
    });
});