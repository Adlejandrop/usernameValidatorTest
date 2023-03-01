import regularExpressions from './RegularExpressions.js'

class UserValidator {
    constructor() {
        this.rules = [];
        this.addNewRuleRegex.bind(this.addNewRuleRegex);
        Object.values(regularExpressions).forEach(regex => {
            this.addNewRuleRegex(regex);
        });
    }

    validateUserStrByRules(userStr) {
        for (let i = 0; i < this.rules.length; i++) {
            if (!this.rules[i].test(userStr)) return false;
        }
        return true;

    }
    addNewRuleRegex(newRegex){
        this.rules.push(newRegex);
    }

}

export default UserValidator