// password length function 
  // 8-128 characters
  // password length holding variable
// char type function --- lowercase, uppercase, numeric, and/or special characters
  // at least one should be selected
  // char type array
  // randomiz from array function
  // if statments concat arrays depending on slected options
//generate password function
  // display password to user
//-----------------------------------------------------------------------------------

//-------------------------- 
var userPassLength = 7; // how many characters to randomize into the password
var userPass = ""; // stores finished password
//--------------------------

//--------------------------
var lowerCheck = false; // checks for user confirmation 
var upperCheck = false;
var numCheck = false;
var specCheck = false; // checks for user confirmation
//--------------------------

//-------------------------- adds user options to randomization pool
var userTypes = []; 
var lowerArr = "abcdefghijklmnopqrstuvwxyz".split(""); 
var upperArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numArr = "0123456789".split("");
var specArr = "!@#$%^&*()-_=+".split(""); 
//-------------------------- adds user options to randomization pool

//-----------------------------------------------------------------------------------
// press button (event listener)
// function to write password starts
// user is prompted to confirm to criteria
  // confrimed criteria dictates array of character options
// user is prompted for password length
  // length is checked to be in correct range
// password is randomized with user length and chracter options
// password string is returned in password writing function and injected into html 



// Assignment Code
var generateBtn = document.querySelector("#generate"); // finds button in html
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // sets local password var equal to password making function
  var passwordText = document.querySelector("#password"); // finds text in html to inject password text to

  passwordText.value = password; // injects made password into html box
}

function generatePassword() {
  userCriteriaChooser();
  checkCriteria();
  userPassLength = askUserPassLength();
  return passwordMaker();
}


function userCriteriaChooser() { // gets user to choose password chracter pool
  lowerCheck = confirm("Do you want lower case characters in your password?");
  upperCheck = confirm("Do you want upper case characters in your password?");
  numCheck = confirm("Do you want numbers in your password?");
  specCheck = confirm("Do you want special characters in your password?");

  console.log(lowerCheck);
  console.log(upperCheck);
  console.log(numCheck);
  console.log(specCheck);
}

function checkCriteria() {
  if (lowerCheck) { userTypes += lowerArr } // concat lowercase alphabet if user says yes
  if (upperCheck) { userTypes += upperArr } // concat uppercase alphabet if user says yes
  if (numCheck) { userTypes += numArr } // concat numbers 0-9 if user says yes
  if (specCheck) { userTypes += specArr } // concat special characters if user says yes

  console.log(userTypes); // debug userType value
}

function askUserPassLength() {  
  for (var i = 0; i < 1; i++) {
  var askUser = prompt("How long do you want your password to be? Type a number between 8-128"); // gets user input
    if (parseInt(askUser) < 8 || parseInt(askUser) > 128) { // if not 8-128 then get user input again
      alert("Please enter in a number netween 8 and 128"); i--;
    } else if (parseInt(askUser) >= 8 && parseInt(askUser) <= 128) { // return user value if between 8-128
        return askUser; }
  }
}

function passwordMaker() {
  var ranPass = ""; // temp password holder

  for (var i = 0; i < userPassLength; i++) { // loops for user picked password length
    ranPass =+ userTypes[Math.floor(Math.random()*userTypes.length)]; // add randomized character from user picked list
  }
  console.log(ranPass); // debug ranPass value
  return ranPass;
}




