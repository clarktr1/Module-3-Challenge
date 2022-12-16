// Dom Elements

lengthEl = document.getElementById("length");
upperEl = document.getElementById("upper");
lowerEl = document.getElementById("lower");
numbersEl = document.getElementById("numbers");
specialEl = document.getElementById("special");
generateEl = document.getElementById("generate");
passwordEl = document.getElementById("password");

// Generate Password 

var generatePassword= function() {
  var charCodes = Array.from(Array(26)).map( (_, i) => i + 97);
  var lowerCase = charCodes.map(code => String.fromCharCode(code));
  var upperCase = lowerCase.map(lowerCase => lowerCase.toUpperCase());
  var numbers = [1,2,3,4,5,6,7,8,9,0];
  var specialChar = ["!","@","#","$","%","^","&","*","(",")",".","?",","];
  var randomChar = [];

  var lengthPrompt = window.prompt("How many characters would you like your password to be? Between 8-128");
    if(lengthPrompt >= 8 && i <= 128) {
      return(lengthPrompt);
  } else {
      window.prompt("That is not in the range! Try again");
      lengthPrompt;
  }
  
  var legnthConfirm = parseInt(lengthPrompt);
    console.log(lengthPrompt);

  var numbersPrompt = window.confirm("Would you like your password to have numbers?");
    if(numbersPrompt === true){
      randomChar = randomChar.concat(numbers);
  }

  var upperPrompt = window.confirm("Would you like your password to have Upper Case letters?");
    if(upperPrompt === true){
      randomChar = randomChar.concat(upperCase)
    }

  var lowerPrompt = window.confirm("Would you like your password to have Lower Case letters?");
    if(lowerPrompt === true){
      randomChar = randomChar.concat(lowerCase);
    }

  var specialPrompt = window.confirm("Would you like your password to have Special Characters?");
    if(specialPrompt === true){
      randomChar = randomChar.concat(specialChar);
    }

    console.log(randomChar);

  var randomIndex = (Math.floor(Math.random() * randomChar.length));

  console.log(randomIndex);

  for ( i = 0; i >= lengthPrompt; i++) {
    return(randomChar[randomIndex]);
  }

  console.log(randomChar[randomIndex]);

  passwordEl.innerHTML = randomChar[randomIndex];
};


generateEl.addEventListener('click', generatePassword);