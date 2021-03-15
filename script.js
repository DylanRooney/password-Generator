// Assignment Code
var generateBtn = document.querySelector("#generate");

var genPassword = [];
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz ";
var numbers = "0123456789 ";
var specialChar = "!@#$%^&*(){}[]<>?}:; ";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  passwordString = "";
  var useLowerCase = window.confirm("Do you want lower cases?");
  var useUpperCase = window.confirm("Do you want to use upper cases?");
  var useNumbers = window.confirm("Do you Want to use Numbers?");
  var useSpecial = window.confirm("Do you want to use Special Characters?");

  if(useLowerCase == false && useUpperCase == false && useNumbers == false && useSpecial == false) {
    window.alert("Please select one type of character");
    var useLowerCase = window.confirm("Do you want lower cases?");
    var useUpperCase = window.confirm("Do you want to use upper cases?");
    var useNumbers = window.confirm("Do you Want to use Numbers?");
    var useSpecial = window.confirm("Do you want to use Special Characters?");
  }

  var passwordLength = parseInt(pront("Please use a character between 8 and 128"));
  if(passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) != "number" || passwordLength === null) {
    window.alert("Password can't be less that 8 characters and more than 128 characters");
  }

  if(useLowerCase === true) {
    genPassword.push(lowerCaseChar);
  }

  if(useUpperCase === true) {
    genPassword.push(lowerCaseChar.toUpperCase);
  }

  if(useNumbers === true) {
    genPassword.push(numbers);
  }

  if (useSpecial === true) {
    genPassword.push(specialChar);
  }

  for(var i = 0; i < passwordLength; i++) {
    var randomCharArrayNum;
    var selectedCharArray;
    var randomCharNum;
    var randomchar;

    randomCharArrayNum = parseInt(Math.floor(Math.random()*genPassword.length));

    selectedCharArray=genPassword[randomCharArrayNum];

    randomCharNum = parseInt(Math.floor(Math.random()*genPassword.length));

    randomchar=genPassword[randomCharNum];

    passwordString+=randomchar;
  }

  passwordText.textContent = passwordString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
