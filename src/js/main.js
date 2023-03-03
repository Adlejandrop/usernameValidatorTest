// We import the user validator class which will allow us to validate a string and manipulate the validation rules as well,  and we create a new instance.
import UserValidator from "./validation/UserValidator.js";
const userValidator = new UserValidator();

// Global variables. The next two lines are the Dom elements we will interact with.
const usernameInput = document.querySelector('#usernameInput');
const resultDisplayText = document.querySelector('#resultDisplayText');
const debounceDelay = 500;

//Instead of just returning true or false, I opted for a message to be displayed to the user.
const validationHTMLChanges = {
    isValid: {
        message: 'Congrats! A Valid Username',
        classList: ['validUsername']
    },
    isInvalid: {
        message: 'Your username is not valid. Please check the requirements for a valid username.',
        classList: ['invalidUsername']
    }
};



//I added this function to give a visual cue for the user to see whether the user is valid or not
//With further development this dom manipulation could be turned into its own separate class with methods like setClassName, setHTML, etc. For this assignment I decided to focus
//on the validation logic.

const renderValidationResultInHtml = (result) => {
    const resultClassList = result ? validationHTMLChanges.isValid.classList : validationHTMLChanges.isInvalid.classList
    resultDisplayText.innerHTML = result ? validationHTMLChanges.isValid.message : validationHTMLChanges.isInvalid.message
    resultDisplayText.classList = resultClassList
};

const CodelandUsernameValidation = (str) => {
    return userValidator.validateUserStrByRules(str);
};

//This name could be change to something like mainExecution, or another more broad term. I do not like when a function name indicates more than one process, but 
// in this case, it is a good idea to have one function that runs both the validation and the rendering.
const usernameValidationAndRendering = (str) => {
    if (!str) {
        resultDisplayText.classList = [`''`];
        resultDisplayText.innerHTML = '';
        return;
    }
    const validationResult = CodelandUsernameValidation(str);
    renderValidationResultInHtml(validationResult);

};

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
const debounceUsernameValidationAndRendering = debounce(usernameValidationAndRendering, debounceDelay);


//We run the debounced main function here, triggered on keyup. The debounce logic is explained above the debounce function definition.
userTestContainer.addEventListener('keyup', () => {
    const userInput = usernameInput.value;
    debounceUsernameValidationAndRendering(userInput)
});