function main() {

  var gui = {
    boton1 : document.getElementById('boton1'),
    boton2 : document.getElementById('boton2'),
    boton3 : document.getElementById('boton3'),
    boton4 : document.getElementById('boton4'),
    boton5 : document.getElementById('boton5'),
    boton6 : document.getElementById('boton6'),
    boton7 : document.getElementById('boton7'),
    boton8 : document.getElementById('boton8'),
    boton9 : document.getElementById('boton9'),
    boton0 : document.getElementById('boton0'),
    botonsuma : document.getElementById('botonsuma'),
    botonresta : document.getElementById('botonresta'),
    botonmultiplicacion : document.getElementById('botonmultiplicacion'),
    botondivision : document.getElementById('botondivision'),
    display : document.getElementById('display'),
  }
  gui.boton1.onclick = () => {
    var x = 1;
    var pos = gui.display.innerHTML.indexOf("0");
    if (pos == 0){
        gui.display.innerHTML = gui.display.innerHTML.replace("0","1");
    }else{
        gui.display.innerHTML += x;
    }
  }

  gui.boton2.onclick = () => {
    var x = 2;
    var pos = gui.display.innerHTML.indexOf("0");
    if (pos == 0){
        gui.display.innerHTML = gui.display.innerHTML.replace("0","2");
    }else{
        gui.display.innerHTML += x;
    }
  }

  gui.boton3.onclick = () => {
    var x = 3;
    var pos = gui.display.innerHTML.indexOf("0");
    if (pos == 0){
        gui.display.innerHTML = gui.display.innerHTML.replace("0","3");
    }else{
        gui.display.innerHTML += x;
    }
  }

  gui.boton4.onclick = () => {
    var x = 4;
    var pos = gui.display.innerHTML.indexOf("0");
    if (pos == 0){
        gui.display.innerHTML = gui.display.innerHTML.replace("0","4");
    }else{
        gui.display.innerHTML += x;
    }
  }

  gui.boton5.onclick = () => {
    var x = 5;
    var pos = gui.display.innerHTML.indexOf("0");
    if (pos == 0){
        gui.display.innerHTML = gui.display.innerHTML.replace("0","5");
    }else{
        gui.display.innerHTML += x;
    }
  }

  gui.boton6.onclick = () => {
    var x = 6;
    var pos = gui.display.innerHTML.indexOf("0");
    if (pos == 0){
        gui.display.innerHTML = gui.display.innerHTML.replace("0","6");
    }else{
        gui.display.innerHTML += x;
    }
  }

  gui.boton7.onclick = () => {
    var x = 7;
    var pos = gui.display.innerHTML.indexOf("0");
    if (pos == 0){
        gui.display.innerHTML = gui.display.innerHTML.replace("0","7");
    }else{
        gui.display.innerHTML += x;
    }
  }

  gui.boton8.onclick = () => {
    var x = 8;
    var pos = gui.display.innerHTML.indexOf("0");
    if (pos == 0){
        gui.display.innerHTML = gui.display.innerHTML.replace("0","8");
    }else{
        gui.display.innerHTML += x;
    }
  }

  gui.boton9.onclick = () => {
    var x = 9;
    var pos = gui.display.innerHTML.indexOf("0");
    if (pos == 0){
        gui.display.innerHTML = gui.display.innerHTML.replace("0","9");
    }else{
        gui.display.innerHTML += x;
    }
  }

  gui.boton0.onclick = () => {
    var x = 0;
    gui.display.innerHTML += x;
  }
}
