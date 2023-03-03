Username validator by Alejandro Pinedo 
2023


>>Description:

A Username validator that runs in your browser. 
The purpose of this application is to validate usernames entered by a user and let them know whether their username is or not compliant with a set of rules. 

In this repository you will find the main logic inside of the main.js file (src/js/main.js).
To check the rules you can go to the Rules.js file (src/js/validation/Rules).
To check the validation logic you can go to the UserValidator.js file (src/js/validation/UserValidator.js).
The rest of the files are a style.css for a simple ui and an html file, index.html. 

>>How to run: 

You can either run this web app by going to https://adlejandrop.github.io/usernameValidatorTest/
or by cloning the repo, opening the index.html file in Visual Studio code, and run it with the Live Server Extension 

Once the browser opens this web app, try any username by typing in the input element next to the word "Username:".
When you are done writing the name you will be shown a message telling you if the username is valid or not. 
You can modify your input as many times as you want to check different usernames. 

>>Relevant information about decision I made for this project:

Given a simple prompt, I wanted to create a code that fulfilled the requirements but also allowd for further improvements.
For that reason the code is structured in a way that achieves 3 main objectives: 
1. Readability 
2. Editability 
3. Ease of use for the user.

>>Key points to meet the objectives: 

1. The code is modularized: 
The main.js file is the js injected into the html. It runs the username validation process. 

The UserValidator.js has a UserValidator class where the validation logic is ran and the rules to be used for that specific process are stored at execution.

The  Rules.js file contains the rules and their regex. They are accessed by the UserValidator which adds them to its array property "rules".

2. The code allows for the modification of the rules: 
The UserValidator class stores, in execution, the rules that are used in this specific validation process. (Regarding possible different validation processes, refer to the next point)  
This class has a addNewRuleRegex method that adds the rules to the rules property inside the class, where rules are accessed when validating a string. 
This logic allows devs to add new rules by executing this method; other methods could be added to the UserValidator class to make it possible to edit, delete, and get rules

However the rules and regex themselves are stored in a configuration file Rules.js.
This way a dev can easily understand what the requirements are. 
This allows for the rules to be changed in the future, and for new rules to be added into the Rules.js file.

3. The code allows for different validations: 
In case a different validation for another input was necessary, devs could use the same UserValidator class.
For example if in the hypothetical case that a password validator  was to be implemented, devs can utilize a new instance of the UserValidator class (It would make sense to change the name of the class in that case) and add diferent rules with the addRuleRegex Method. 
The specific rules and regex for new validations would still be stored in the Rules.js file. This file would have different objects for each validation 
for example UsernameRules, PasswordRules, etc

4. The code is made for browsers and has a small UX/UI work:
I decided to make this assignement a web app. This way users can easily test if their usernames are valid or not, and inmediatly see the results in a easy-to-understand manner.
The requirements for a valid user where added for clarity, and the results of the validation are rendered in the html when set amount of miliseconds have transpired without the user inputing characters in the input element. 

