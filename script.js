// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var unfinishedPassword = [];
  var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var specialchar = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", '"']
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var megaArray = upperLetters.concat(lowerLetters, specialchar, numbers);

  var selectlength = window.prompt("Enter length of password");
  if (selectlength < 8 || selectlength > 128) {
    window.alert("Length not valid. Try again");
    return;
  }
  
  var selectupper = window.confirm("Do you want to use uppercase letters?");
  var selectlower = window.confirm("Do you want to use lowercase letters?");
  var selectspec = window.confirm("Do you want to use special characters?");
  var selectnum = window.confirm("Do you want to use numbers?");
  if (!selectupper && !selectlower && !selectspec && !selectnum) {
    window.alert("Input not valid. Try again");
    return;
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
