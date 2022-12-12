lengthEl = document.getElementById("length");
upperEl = document.getElementById("upper");
lowerEl = document.getElementById("lower");
numbersEl = document.getElementById("numbers");
specialEl = document.getElementById("special");
generateEl = document.getElementById("generate");
passwordEl = document.getElementById("password");


generateEl.addEventListener("click", () => {
  var length = lengthEl.value;

  console.log(length)
});


//Generator Functions

getUpper = function(){

}

getLower = function(){

}

getNumber = function(){

}


getSpecial = function() {
  if (specialEl === true) {
      return ("!@#$%^&*()_+-=");
}   else {
      return (" ");
}};