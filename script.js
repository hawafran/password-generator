var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];

var choices;

var toUpper = function (x) {
    return x.toUpperCase();
};

letterupper = letter.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    generatePassword();
    document.getElementById("password");
});


function generatePassword() {

    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

    if (!enter) {
        alert("Enter a Value");
    } else if (enter < 8 || enter > 128) {
       
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
     
        confirmNumber = confirm("Will your password contain numbers?");
        confirmCharacter = confirm("Will your password contain special characters?");
        confirmUppercase = confirm("Will youjr passwordcontain Uppercase letters?");
        confirmLowercase = confirm("Will your password contain Lowercase letters?");
    };

  
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must select a criteria!");

    }
 
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, letter, letterupper);
    }
 
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, letterupper);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, letter);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(letter, letterupper);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(letter, letterupper);
    }
    
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(letter);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(letterupper);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = letter.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = letter.concat(letterupper);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(letterupper);
    }
    
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = letter;
    }

    else if (confirmUppercase) {
        choices = space.concat(letterupper);
    };


    var password = [];

    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    
    var password = password.join("");
    UserInput(password);
    return password;
}

function UserInput(password) {
    document.getElementById("password").textContent = password;

}


