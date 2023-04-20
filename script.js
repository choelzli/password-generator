// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  // Declare variables for characters
  var unfinishedPassword = [];
  var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var specialchar = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", '"']
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var megaArray = upperLetters.concat(lowerLetters, specialchar, numbers);

// Prompt character length
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

  // Confirm response conditions
  if (selectupper) {
    var ranNum = Math.floor(Math.random() * upperLetters.length);
    let firstUpper = upperLetters[ranNum];
    unfinishedPassword.push(firstUpper);
    } else {
      megaArray.splice(megaArray.lastIndexOf("A"),upperLetters.length);
    }
    
    if (selectlower) {
    var ranNum = Math.floor(Math.random() * lowerLetters.length);
    let firstLower = lowerLetters[ranNum];
    unfinishedPassword.push(firstLower);
    } else {
      megaArray.splice(megaArray.lastIndexOf("a"),lowerLetters.length);
    }
  
    if (selectspec) {
    var ranNum = Math.floor(Math.random() * specialchar.length);
    let firstSpecial = specialchar[ranNum];
    unfinishedPassword.push(firstSpecial);
    } else {
      megaArray.splice(megaArray.lastIndexOf("!"),specialchar.length);
    }
  
    if (selectnum) {
    var ranNum = Math.floor(Math.random() * numbers.length);
    let firstnumber = numbers[ranNum];
    unfinishedPassword.push(firstnumber);
    } else {
      megaArray.splice(megaArray.lastIndexOf("1"),numbers.length);
    }
  
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
