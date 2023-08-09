const ingressos = [];


function addRedBorder (id){
  element = document.querySelector("#" + id);
  element.style.border = "5px solid red";

}


  function highlightCard (selector)
  {
      var element = document.querySelector(selector);
      element.classList.toggle("cardhighlight");
  }

  function checkKeyboardCode(){
    document.addEventListener('keydown', (event) => {
      var name = event.key;
      var code = event.code;
      // alert the key name and key code on keydown
      alert(`Tecla Pressionada ${name} \r\n Key code: ${code}`);
    }, false);
  }

function addKeyboardEventListeners(){

  document.addEventListener('keydown', (event) =>{
    var ingresso1 = document.getElementById("quinta");
    var ingresso2 = document.getElementById("sexta");
    var ingresso3 = document.getElementById("sabado");
    var ingresso4 = document.getElementById("domingo");

    var code = event.code;
    if (code == 'Numpad1'){
      ingresso1.classList.toggle("cardhighlight");
      ingresso2.classList.remove("cardhighlight");
      ingresso3.classList.remove("cardhighlight");
      ingresso4.classList.remove("cardhighlight");
    }

    if (code == 'Numpad2'){
      ingresso1.classList.remove("cardhighlight");
      ingresso2.classList.toggle("cardhighlight");
      ingresso3.classList.remove("cardhighlight");
      ingresso4.classList.remove("cardhighlight");
    }

    if (code == 'Numpad3'){
      ingresso1.classList.remove("cardhighlight");
      ingresso2.classList.remove("cardhighlight");
      ingresso3.classList.toggle("cardhighlight");
      ingresso4.classList.remove("cardhighlight");
    }

    if (code == 'Numpad4'){
      ingresso1.classList.remove("cardhighlight");
      ingresso2.classList.remove("cardhighlight");
      ingresso3.classList.remove("cardhighlight");
      ingresso4.classList.toggle("cardhighlight");
    }

  }, false);
}

selectCard = (selector) => {
  var element = document.querySelector(selector);
  element.classList.toggle("card-selected");
  if (ingressos.includes(selector)) ingressos.pop(selector);
  else ingressos.push(selector)
}

showSelectedCards = () => {
  if (ingressos.lenght > 0) alert ("Ingressos Selecionados:" + ingressos);
}

addKeyboardEventListeners();

