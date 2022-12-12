window.onload = function () {
  var slider = document.getElementById("length-slider");
  slider.addEventListener("input", function () {
      document.body.style.setProperty("--thumbNumber", "'" + this.value + "'");
  });
  // whenever this element receives input, change the value of --thumbNumber to this element's value
}