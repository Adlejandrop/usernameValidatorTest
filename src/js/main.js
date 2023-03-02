// We import the user validator class and create a new instance.
import UserValidator from "./validation/Validator.js"
const userValidator = new UserValidator();



const CodelandUsernameValidation = (str) => {
    return userValidator.validateUserStrByRules(str);
}

// Dom manipulation for the HTML implementation of the assignment
const usernameInput = document.querySelector('#usernameInput');
const resultDisplayBox = document.querySelector('#resultDisplayBox');
const debounceDelay = 500

//I added this function to give a visual cue for the user to see whether the user is valid or not
const renderValidationResultInHtml = (result) => {
    const resultClass = result?'validUsername':'invalidUsername'
    resultDisplayBox.classList = [`${resultClass}`];
    resultDisplayBox.innerHTML = result?'Congrats! A Valid Username':'Your Username is not valid';
}

//This name could be change to something like mainExecution, or another more broad term. I do not like when a function name indicates more than one process, but 
// in this case, it is a good idea to have one function that runs both the validation and the rendering.
const usernameValidationAndRendering = (str) => {
    const validationResult = CodelandUsernameValidation(str);
    renderValidationResultInHtml(validationResult);
}

//I decided to go with a debounce function to debounce the logic that will check validation and then render the result in the html. This way we
//will run the validation only after the user has ended typing. I went with this implementation because it avoids running the validation multiple times -if 
//for example I ran the function on every key press.
//It also allows for a fluid user experience, where they can test the username realtime, without having to write one, and submit it for validation. The validation feels 
// like it is done in "realtime".

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

//we debounce our username validation and rendering function. 
const debounceUsernameValidationAndRendering = debounce(usernameValidationAndRendering, debounceDelay)


//We run the debounced main function here, triggered on keyup. The debounce logic is explained above the debounce function definition.
userTestContainer.addEventListener('keyup',()=>{
    const userInput = usernameInput.value
    debounceUsernameValidationAndRendering(userInput)})