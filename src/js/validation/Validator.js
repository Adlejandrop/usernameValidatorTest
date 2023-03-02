import regularExpressions from './RegularExpressions.js'

// This is a class created so that the code can be updated and changed easily. It allows a developer or dev team to store rules, add rules, and modify
// the method that runs the actual validation. 

class UserValidator {
    constructor() {
        this.rules = [];
        this.addNewRuleRegex.bind(this.addNewRuleRegex);
// I decided to implement a way so that this app can be modified in the future with different regex. The constructor will create the rules from a separated config file 
// that stores the regular expressions

        Object.values(regularExpressions).forEach(regex => {
            this.addNewRuleRegex(regex);
        });
    }

// This is the validator method. As we can see the name indicates that it will validate a user string according to "rules", it does not hardcode the rules.
    validateUserStrByRules(userStr) {
        for (let i = 0; i < this.rules.length; i++) {
            if (!this.rules[i].test(userStr)) return false;
        }
        return true;

    }

//This methods I added following this same logic. New rules can be added to the validation. I thought about adding a delete and modify method but decided it was out of scope for
//the assignment. This method is needed for the code to run, while the others are not. But they could be added if necessary working with the this.rules class property.

    addNewRuleRegex(newRegex){
        this.rules.push(newRegex);
    }

}

//We export the UserValidator class for it to be used in main.js
export default UserValidator