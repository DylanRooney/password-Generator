// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays to create the different variables
var genPassword = [];
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$" ,"%", "^", "&", "*", "-", "_", "<", ">", ";", ":", "'"]; 

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  // Grabs the password Selector
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  // Sets strings and confirm windows for the client's choice of type of password
  passwordString = "";
  let useLowerCase = window.confirm("Do you want lower cases?");
  let useUpperCase = window.confirm("Do you want to use upper cases?");
  let useNumbers = window.confirm("Do you Want to use Numbers?");
  let useSpecial = window.confirm("Do you want to use Special Characters?");

  // If the user doesn't choose any characters, the windows will ask again.
  if(useLowerCase == false && useUpperCase == false && useNumbers == false && useSpecial == false) {
    window.alert("Please select one type of character");
    useLowerCase = window.confirm("Do you want lower cases?");
    useUpperCase = window.confirm("Do you want to use upper cases?");
    useNumbers = window.confirm("Do you Want to use Numbers?");
    useSpecial = window.confirm("Do you want to use Special Characters?");
  }

  function generatePassword() {
    // Generates the Password
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
  
      //randomises the differnt choices
      randomCharArrayNum = parseInt(Math.floor(Math.random()*genPassword.length));
  
      selectedCharArray = genPassword[randomCharArrayNum];
  
      randomCharNum = parseInt(Math.floor(Math.random()*genPassword.length));
  
      randomchar = genPassword[randomCharNum];
  
      //shows the string
      passwordString += randomchar;
    }

  //renders the final password
  passwordText.textContent(genPassword);
  }

  // Asks client to use a character between 8 and 128
  let passwordLength = parseInt(window.prompt("Please use a character between 8 and 128"));
  //checks if the client is using illegitiate characters or something less than 8 characters or more than 128
  if(passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) != "number" ||passwordLength === NaN || passwordLength === null) {
    alert("Password can't be less that 8 characters and more than 128 characters");
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
