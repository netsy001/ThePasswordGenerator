// Assignment Code
var generateBtn = document.querySelector("#generate");

var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
var NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
var SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  var charCodes = [];
  var password = ""

  // Prompt for character types
  var uppercase = confirm("Do you want uppercase");
  var lowercase = confirm("Do you want lowercase");
  var numbers = confirm("Do you want numbers");
  var symbols = confirm("Do you want symbols");

  // Validating character types
  if (!uppercase && !lowercase && !numbers && !symbols) {
    choices = alert("You must choose atlease one criteria!");
    return
  }
  // Prompt for password length
  var length = prompt("length of the password");

  // Validating for password length
  if (length < 8 || length > 128) {
    alert("Invalid length")
    return
  }

  // based on character type concating codes into charCodes array
  if (uppercase === true) {
    charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  }
  if (lowercase === true) {
    charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
  }
  if (numbers === true) {
    charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  }
  if (symbols === true) {
    charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  }

  // generating password from first char code ( index 0 ) to charcodes length -1
  for (i = 0; i < length; i++) {
    var charactercode = charCodes[Math.floor(Math.random() * (charCodes.length - 1)) + 0];
    password = password + String.fromCharCode(charactercode);
  }

  return password
}

function arrayFromLowToHigh(low, high) {
  var array = []
  for (i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}