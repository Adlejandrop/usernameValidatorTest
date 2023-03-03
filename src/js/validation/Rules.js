//This is a configuration object where the VALUE-KEY pair is used to indicate what the rule does in the former, and the according regular expression in the latter.
//If we need  to modify the validation rules we can do so easily by changing the properties of this RegularExpressions object

const RegularExpressions = {

    "between4And25Chars": /^.{4,25}$/,
    "mustStartWithALetter": /^[a-zA-Z].*$/,
    "mayOnlyHaveLettersNumsAndLowDash": /^[a-zA-Z0-9_]*$/,
    "cannotEndInALowDash": /[^_]$/


}

//We export it for use in the Validator class.

export default RegularExpressions