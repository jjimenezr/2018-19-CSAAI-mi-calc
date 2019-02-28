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
    botoncoma : document.getElementById('botoncoma'),
    botonsuma : document.getElementById('botonsuma'),
    botonresta : document.getElementById('botonresta'),
    botonmultiplicacion : document.getElementById('botonmultiplicacion'),
    botondivision : document.getElementById('botondivision'),
    botonAC : document.getElementById('botonAC'),
    display : document.getElementById('display'),
    botonigual : document.getElementById('botonigual'),
    operator1 : 0,
    operator2 : 0,
    operation : null,
    operationstate : null,
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

  gui.botoncoma.onclick = () => {
    var x = ".";
    var pos = gui.display.innerHTML.indexOf("0");
    if (pos == 0){
        gui.display.innerHTML = gui.display.innerHTML.replace("0","0.");
    }else{
        gui.display.innerHTML += x;
    }
  }

  gui.botonAC.onclick = () => {
    gui.operator1 = 0;
    gui.operator2 = 0;
    gui.operation = null;
    gui.operationstate = null;
    gui.display.innerHTML = 0; 
  }

  gui.botonsuma.onclick = () => {
    gui.operator1 = gui.display.innerHTML;
    gui.display.innerHTML = 0;
    gui.operationstate = "suma";
  }
  gui.botonresta.onclick = () => {
    gui.operator1 = gui.display.innerHTML;
    gui.display.innerHTML = 0;
    gui.operationstate = "resta";
  }
  gui.botonmultiplicacion.onclick = () => {
    gui.operator1 = gui.display.innerHTML;
    gui.display.innerHTML = 0;
    gui.operationstate = "multiplicacion";
  }
  gui.botondivision.onclick = () => {
    gui.operator1 = gui.display.innerHTML;
    gui.display.innerHTML = 0;
    gui.operationstate = "division";
  }
  gui.botonigual.onclick = () =>{
    gui.operator2 = gui.display.innerHTML;
    if (gui.operationstate == "suma") {
      gui.operation = Number(gui.operator1) + Number(gui.operator2);
      gui.display.innerHTML = gui.operation;
    } else if (gui.operationstate == "resta") {
      gui.operation = Number(gui.operator1) - Number(gui.operator2);
      gui.display.innerHTML = gui.operation;
    } else if (gui.operationstate == "multiplicacion") {
      gui.operation = Number(gui.operator1) * Number(gui.operator2);
      gui.display.innerHTML = gui.operation;
    } else if (gui.operationstate == "division") {
      gui.operation = Number(gui.operator1) / Number(gui.operator2);
      gui.display.innerHTML = gui.operation;
    }
    gui.operation = 0;
    gui.operationstate = null;
  }
}
