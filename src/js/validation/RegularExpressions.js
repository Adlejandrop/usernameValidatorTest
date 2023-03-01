const RegularExpressions = {

    "between4And25Chars": /^.{4,25}$/,
    "mustStartWithALetter": /^[a-zA-Z].*$/,
    "mayOnlyHaveLettersNumsAndLowDash": /^[a-zA-Z0-9_]*$/,
    "cannotEndInALowDash": /[^_]$/


}

export default RegularExpressions