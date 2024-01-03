const passwordInput = document.querySelector('#password');
const generatePasswordBtn = document.querySelector('#generate-password');
const copyImage = document.querySelector('#copy');

const lenght = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+-=[]{}|;:\,.<>?/";
const allChars = upperCase + lowerCase + number + symbol;


generatePasswordBtn.addEventListener('click', createPassword)


function createPassword() {

    let password = "";

    for (let i = 0; i < lenght; i++) {

        let randomNumber = Math.floor(Math.random() * allChars.length);
        password += allChars[randomNumber];
    }

    passwordInput.value = password;
}

copyImage.addEventListener('click', () => {
    passwordInput.select();

    document.execCommand('copy');

    passwordInput.value = '';
    passwordInput.placeholder = 'Password Copied';

    setTimeout(() => {

        passwordInput.placeholder = 'Password';

    }, 1500)
})