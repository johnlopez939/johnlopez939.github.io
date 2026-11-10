function init() {
  // Create a variable to store button object content
  var button = document.getElementById('entrybutton');

  function myFunction() {
    var message = document.getElementById("entryinput").value;
    alert('John David Lopez: ' + message);
    document.getElementById("textoutput").textContent = message;
  }

  button.addEventListener('click', myFunction);
}

window.addEventListener('load', init);