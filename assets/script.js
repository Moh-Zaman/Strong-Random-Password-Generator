// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
var passLength
var passLower
var passUpper
var passNum
var passSpecial

function getPasswordOptions() {
  passLength = prompt("How long do you want your password.")
  if (passLength < 8) {
    alert("Has to be higher than 8"); return getPasswordOptions();
  } else if (passLength > 128) {
    alert("Has to be less than 128"); return getPasswordOptions();
  } else if (passLength > 8 && passLength < 128) {
    alert("Perfect, your password will be " + passLength + " characters long");
  } else return getPasswordOptions(); 
  
  passLower = prompt("Do you want Lowercase? Y/N")
  if (passLower !== "Y" && passLower === "N") {
    alert("Great, your password will have lowercase characters");
  } else if (passLower !== "N" && passLower === "Y") {
    alert("Great, your password will have lowercase characters");
  } else if (passLower !== "N" || passLower === "Y") {
    alert("Please select Y or N. Restarting"); return getPasswordOptions();
  }
  
  passUpper = prompt("Do you want Uppercase? Y/N");
  if (passUpper !== "Y" && passUpper === "N") {
    alert("Great, your password will have uppercase characters");
  } else if (passUpper !== "N" && passUpper === "Y") {
    alert("Great, your password will have uppercase characters");
  } else if (passUpper !== "N" || passUpper === "Y") {
    alert("Please select Y or N. Restarting"); return getPasswordOptions();
  }
  
  passNum = prompt("Do you want Numbers? Y/N");
  if (passNum !== "Y" && passNum === "N") {
    alert("Great, your password will have numerical characters");
  } else if (passNum !== "N" && passNum === "Y") {
    alert("Great, your password will have numerical characters");
  } else if (passNum !== "N" || passNum === "Y") {
    alert("Please select Y or N. Restarting"); return getPasswordOptions();
  }
  
  passSpecial = prompt("Do you want Special Characters? Y/N");
  if (passSpecial !== "Y" && passSpecial === "N") {
    alert("Great, your password will have special characters");
  } else if (passSpecial !== "N" && passSpecial === "Y") {
    alert("Great, your password will have special characters");
  } else if (passSpecial !== "N" || passSpecial === "Y") {
    alert("Please select Y or N. Restarting"); return getPasswordOptions();
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  var shuffledLower = lowerCasedCharacters.sort(() => 0.5 - Math.random());
    var resultLower = shuffledLower.slice(0, passLower)
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

getPasswordOptions();
console.log(passLower)
console.log(passUpper)
console.log(passNum)
console.log(passSpecial)

