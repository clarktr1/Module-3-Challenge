// Dom Elements

lengthEl = document.getElementById("length");
upperEl = document.getElementById("upper");
lowerEl = document.getElementById("lower");
numbersEl = document.getElementById("numbers");
specialEl = document.getElementById("special");
generateEl = document.getElementById("generate");
passwordEl = document.getElementById("password");

//Criteria Arrays

var charCodes = Array.from(Array(26)).map( (_, i) => i + 97);
var lowerCase = charCodes.map(code => String.fromCharCode(code));
var upperCase = lowerCase.map(lowerCase => lowerCase.toUpperCase());
var numbers = [1,2,3,4,5,6,7,8,9,0];
var specialChar = ["!@#$%^&*().?"];

// Criteria Checks

var length = lengthEl.value;
var hasUpper = upperEl.checked;
var hasLower = lowerEl.checked;
var hasNumbers = numbersEl.checked;
var hasSpecial = specialEl.checked;

// Generate Password 

var getPassword = (length, hasLower, hasUpper, hasNumbers, hasSpecial) => {
    var randomPassword = [
      //Keys
      (hasLower ? lowerCase : ""),
      (hasUpper ? upperCase : ""),
      (hasNumbers ? numbers : ""),
      (hasSpecial ? specialChar : ""),
      ];

      let password = "";
      if (randomPassword.length === 0) return "";

      for (let i = 0; i < length; i++){
        var randomIndex = math.floor(math.random() * randomPassword.length);
        password += randomPassword[randomIndex];
      }
      return password;
}

generateEl.addEventListener('click', getPassword);