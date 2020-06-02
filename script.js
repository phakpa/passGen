// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  alert("Password character length must be between 8 to 128 characters long!!");
  alert("Password must also include at least 1 character type.")


  //password length code
  let loop = 0;
  let confirmLength = 0;
  while (loop != 1) {
    if (confirmLength < 8) {
      confirmLength = prompt("Please enter your password length: ");
      length = parseInt(confirmLength);
      if (confirmLength < 8) {
        alert("Choose a password character length between 8 to 128 characters long!!");
      }
      loop = 0;

    }
    else if (confirmLength > 128) {
      confirmLength = prompt("Please enter your password length: ");
      length = parseInt(confirmLength);
      if (confirmLength > 128) {
        alert("Choose a password character length between 8 to 128 characters long!!");
      }
      loop = 0;

    }
    else {
      confirmLength = parseInt(confirmLength);
      loop = 1;
    }
  }

  let confirmLoop = false;
  let confirmLowercase = false;
  let confirmUppercase = false;
  let confirmNumber = false;
  let confirmSpecialChar = false;

  while (confirmLoop != true) {
    confirmLowercase = confirm("Lowercase character in password?");
    confirmUppercase = confirm("Uppercase character in password?");
    confirmNumber = confirm("Number character in password?");
    confirmSpecialChar = confirm("Special character in password?");

    if (confirmLowercase === true || confirmUppercase === true || confirmNumber === true || confirmSpecialChar === true) {
      confirmLoop = true;
    }
    else {
      alert("Please select at least one character type to include in your password!!");
      confirmLoop = false;
    }

  }

  function generatePassword() {
    let tempPass = "";

    console.log(confirmLength);
    console.log(typeof confirmLength);

    for (let i = 0; tempPass.length < length; i++) {
      if (confirmLowercase) {
        if (tempPass.length < confirmLength) {
          tempPass += getRandomLower();
        }
        else {
          tempPass = tempPass;
        }
      }
      if (confirmUppercase) {
        if (tempPass.length < confirmLength) {
          tempPass += getRandomUpper();
        }
        else {
          tempPass = tempPass;
        }
      }
      if (confirmNumber) {
        if (tempPass.length < confirmLength) {
          tempPass += getRandomNumber();
        }
        else {
          tempPass = tempPass;
        }
      }
      if (confirmSpecialChar) {
        if (tempPass.length < confirmLength) {
          tempPass += getRandomSymbol();
        }
        else {
          tempPass = tempPass;
        }
      }
    }
    return tempPass;

  }

  let password = generatePassword();
  const passwordText = document.querySelector("#password");

  //calling shuffle password function
  console.log(password);
  password = shufflePassword(password);
  console.log(password);

  passwordText.value = password;
}

//shuffle password function
function shufflePassword(str) {
  let passArr = str.split("");
  let n = passArr.length;

  for (let i = 0; i < n - 1; i++) {
    let j = getRandomInt(n);

    let temp = passArr[i];
    passArr[i] = passArr[j];
    passArr[j] = temp;
  }
  str = passArr.join("");
  return str;
}

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}

//Lower, Upper, Number, Special Characters generater

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!#$%&,()*+' -./:;<=\>?@[]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
