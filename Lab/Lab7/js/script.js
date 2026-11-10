function init(){
//add your javascrip between these two lines of code
  const input = document.getElementById('entryinput');
  const button = document.getElementById('entrybutton');
  const output = document.getElementById('output');

  button.addEventListener('click', function(){
    const message = input.value;

    alert('John David Lopez: '+ message);

    output.textContent = message;
  });
}


window.addEventListener('load', init);
