const langsec = document.querySelector('.languagesection');
const buttons = document.querySelectorAll('.languagesection a');
const formTitle = document.querySelector('h1');
const userCodeLabel = document.querySelector('label[for="code"]');
const passwordLabel = document.querySelector('label[for="password"]');
const rememberMeLabel = document.querySelector('.remember-forgot label');
const forgetPasswordLink = document.querySelector('.remember-forgot a');
const loginButton = document.querySelector('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Change active class
        langsec.querySelector('.active').classList.remove('active');
        button.classList.add('active');

        // Get language attribute
        const attr = button.getAttribute('language');

        // Update content
        formTitle.textContent = data[attr].formTitle;
        userCodeLabel.textContent = data[attr].userCode;
        passwordLabel.textContent = data[attr].password;
        rememberMeLabel.textContent = data[attr].rememberMe;
        forgetPasswordLink.textContent = data[attr].forgetPassword;
        loginButton.textContent = data[attr].loginButton;
    });
});

// Language data
const data = {
    "english": {
        "formTitle": "Login",
        "userCode": "User Code:",
        "password": "Password:",
        "rememberMe": "Remember me",
        "forgetPassword": "Forget Password?",
        "loginButton": "Login"
    },
    "العربية": {
        "formTitle": "تسجيل الدخول",
        "userCode": "رمز المستخدم:",
        "password": "كلمة المرور:",
        "rememberMe": "تذكرني",
        "forgetPassword": "نسيت كلمة المرور؟",
        "loginButton": "تسجيل الدخول"
    }
};
