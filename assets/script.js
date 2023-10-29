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
  passLength = parseInt(prompt("How long do you want your password."));
  
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Password length must be between 8 and 128 characters.");
    return getPasswordOptions();
  }
  
  passLower = confirm("Do you want lowercase characters?");
  passUpper = confirm("Do you want uppercase characters?");
  passNum = confirm("Do you want numerical characters?");
  passSpecial = confirm("Do you want special characters?");

  if (!passLower && !passUpper && !passNum && !passSpecial) {
    alert("You must select at least one character type.");
    return getPasswordOptions();
}

// Function for getting a random element from an array
var result

function getRandom(arr, n) {
  var shuffledArr = arr.sort(() => 0.5 - Math.random());
  result = shuffledArr.slice(0, n)
}

// Function to generate password with user input
function generatePassword() {
  if (passLower === "Y" && passUpper === "Y" && passNum === "Y" && passSpecial === "Y") {
    var a = passLower.concat(passUpper, passNum, passSpecial);
    getRandom(a, passLength);
  } else if (passLower !== "Y" && passUpper === "Y" && passNum === "Y" && passSpecial === "Y") {
    var b = passUpper.concat(passNum, passSpecial);
    getRandom(b, passLength)
  } else if (passLower === "Y" && passUpper !== "Y" && passNum === "Y" && passSpecial === "Y") {
    var c = passLower.concat(passNum, passSpecial);
    getRandom(c, passLength)
  } else if (passLower === "Y" && passUpper === "Y" && passNum !== "Y" && passSpecial === "Y") {
    var d = passLower.concat(passUpper, passSpecial);
    getRandom(d, passLength)
  } else if (passLower === "Y" && passUpper === "Y" && passNum === "Y" && passSpecial !== "Y") {
    var e = passLower.concat(passUpper, passNum);
    getRandom(e, passLength)
  } else if (passLower !== "Y" && passUpper !== "Y" && passNum === "Y" && passSpecial === "Y") {
    var f = passNum.concat(passSpecial);
    getRandom(f, passLength)
  } else if (passLower !== "Y" && passUpper === "Y" && passNum !== "Y" && passSpecial === "Y") {
    var g = passUpper.concat(passSpecial);
    getRandom(g, passLength)
  } else if (passLower !== "Y" && passUpper === "Y" && passNum === "Y" && passSpecial !== "Y") {
    var h = passUpper.concat(passNum);
    getRandom(h, passLength)
  } else if (passLower === "Y" && passUpper !== "Y" && passNum !== "Y" && passSpecial === "Y") {
    var i = passLower.concat(passSpecial);
    getRandom(i, passLength)
  } else if (passLower === "Y" && passUpper !== "Y" && passNum === "Y" && passSpecial !== "Y") {
    var j = passLower.concat(passNum);
    getRandom(j, passLength)
  } else if (passLower === "Y" && passUpper === "Y" && passNum !== "Y" && passSpecial !== "Y") {
    var k = passLower.concat(passUpper);
    getRandom(k, passLength)
  } else if (passLower === "Y" && passUpper !== "Y" && passNum !== "Y" && passSpecial !== "Y") {
    getRandom(lowerCasedCharacters, passLength)
  } else if (passLower !== "Y" && passUpper === "Y" && passNum !== "Y" && passSpecial !== "Y") {
    getRandom(upperCasedCharacters, passLength)
  } else if (passLower !== "Y" && passUpper !== "Y" && passNum === "Y" && passSpecial !== "Y") {
    getRandom(numericCharacters, passLength)
  } else if (passLower !== "Y" && passUpper !== "Y" && passNum !== "Y" && passSpecial === "Y") {
    getRandom(specialCharacters, passLength)
  }
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




