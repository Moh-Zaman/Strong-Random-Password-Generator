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
}

// Function for getting a random element from an array
var password

function getRandom(arr, n) {
  var shuffledArr = arr.sort(() => 0.5 - Math.random());
  password = shuffledArr.slice(0, n)
}

// Function to generate password with user input
function generatePassword() {
  if (passLower && passUpper && passNum && passSpecial) {
    var a = lowerCasedCharacters.concat(upperCasedCharacters, numericCharacters, specialCharacters);
    getRandom(a, passLength);
  } else if (!passLower && passUpper && passNum && passSpecial) {
    var b = upperCasedCharacters.concat(numericCharacters, specialCharacters);
    getRandom(b, passLength)
  } else if (passLower && !passUpper && passNum && passSpecial) {
    var c = lowerCasedCharacters.concat(numericCharacters, specialCharacters);
    getRandom(c, passLength)
  } else if (passLower && passUpper && !passNum && passSpecial) {
    var d = lowerCasedCharacters.concat(upperCasedCharacters, specialCharacters);
    getRandom(d, passLength)
  } else if (passLower && passUpper && passNum && !passSpecial) {
    var e = lowerCasedCharacters.concat(upperCasedCharacters, numericCharacters);
    getRandom(e, passLength)
  } else if (!passLower && !passUpper && passNum && passSpecial) {
    var f = numericCharacters.concat(specialCharacters);
    getRandom(f, passLength)
  } else if (!passLower && passUpper && !passNum && passSpecial) {
    var g = upperCasedCharacters.concat(specialCharacters);
    getRandom(g, passLength)
  } else if (!passLower && passUpper && passNum && !passSpecial) {
    var h = upperCasedCharacters.concat(numericCharacters);
    getRandom(h, passLength)
  } else if (passLower && !passUpper && !passNum && passSpecial) {
    var i = lowerCasedCharacters.concat(specialCharacters);
    getRandom(i, passLength)
  } else if (passLower && !passUpper && passNum && !passSpecial) {
    var j = lowerCasedCharacters.concat(numericCharacters);
    getRandom(j, passLength)
  } else if (passLower && passUpper && !passNum && !passSpecial) {
    var k = lowerCasedCharacters.concat(upperCasedCharacters);
    getRandom(k, passLength)
  } else if (passLower && !passUpper && !passNum && !passSpecial) {
    getRandom(lowerCasedCharacters, passLength)
  } else if (!passLower && passUpper  && !passNum && !passSpecial) {
    getRandom(upperCasedCharacters, passLength)
  } else if (!passLower && !passUpper && passNum && !passSpecial) {
    getRandom(numericCharacters, passLength)
  } else if (!passLower && !passUpper && !passNum && passSpecial) {
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
generatePassword();
console.log(password);
