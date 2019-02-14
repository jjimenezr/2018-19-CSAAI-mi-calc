function main() {
  console.log("que comiencen los juegos de JS!");

  var boton = document.getElementById('boton1')

  boton.onclick = () => {
    console.log("click");

    var display = document.getElementById('display');
    display.innerHTML = "1";
  }

}
