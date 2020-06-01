// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const confirmLength = prompt("Choose a character length of password betweek 8-128: ");
  const confirmLowercase = confirm("Lowercase?");
  const confirmUppercase = confirm("Uppercase?");
  const confirmNumber = confirm("Number?");
  const confirmSpecialChar = confirm("SpecialCharacter?");

  
  console.log(confirmLength, confirmLowercase, confirmUppercase, confirmNumber, confirmSpecialChar);

  function generatePassword() {
    let tempPass = "";

    for (let i =0; i < confirmLength; i++) {
      tempPass += getRandomLower();
    }
    return tempPass;

}


  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log(password);

}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}

function getRandomSymbol() {
  const symbols = "!#$%&,()*+' -./:;<=\>?@[]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
