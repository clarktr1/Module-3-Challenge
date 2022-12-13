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
console.log(lowerCase);
console.log(upperCase);
var numbers = [1,2,3,4,5,6,7,8,9,0];
var specialChar = ["!@#$%^&*().?"];