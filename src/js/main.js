
import UserValidator from "./validation/Validator.js"
const userValidator = new UserValidator();


const usernameInput = document.querySelector('#usernameInput');
const resultDisplayBox = document.querySelector('#resultDisplayBox');
const debounceDelay = 500

const CodelandUsernameValidation = (str) => {
    return userValidator.validateUserStrByRules(str);
}

const renderValidationResultInHtml = (result) => {
    const resultClass = result?'validUsername':'invalidUsername'
    resultDisplayBox.classList = [`${resultClass}`];
    resultDisplayBox.innerHTML = result?'Congrats! A Valid Username':'Your Username is not valid';
}

const usernameValidationAndRendering = (str) => {
    const validationResult = CodelandUsernameValidation(str);
    renderValidationResultInHtml(validationResult);
}

const debounce = (func, delay) => {
    let timeoutId;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}
const debounceUsernameValidationAndRendering = debounce(usernameValidationAndRendering, debounceDelay)


userTestContainer.addEventListener('keyup',()=>{
    const userInput = usernameInput.value
    debounceUsernameValidationAndRendering(userInput)})