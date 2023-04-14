//CREO UN NUMERO RANDON PARA DONDE VA A ESTAR EL TESORO//
let getRandomNumber = (size) => {
  return Math.floor(Math.random() * size);
};

//ACA CALCULO DONDE HACE CLICK CALCULO EJE X Y EJE Y//
let getDistance = (e, target) => {
  let diffx = e.offsetX - target.x;
  let diffy = e.offsetY - target.y;

  //aplico teorema de pitagoras//
  return Math.sqrt(diffx * diffx + diffy * diffy);
};

//CREO UNA FUNCION FLECHA PARA DECIRLE QUE TAN LEJOS O CERCA ESTA//

let getDistanceHint = (distance) => {
  if (distance > 0 && distance < 20) {
    return "GANASTE";
  } else if (distance < 30) {
    return "muy cerca";
  } else if (distance < 100) {
    return "cerca";
  } else if (distance < 200) {
    return "no tan cerca";
  } else if (distance < 300) {
    return "lejos ";
  } else if (distance > 450) {
    return "recontra lejos ";
  } else return "super lejos";
  console.log(distance);
};
/* 
$(document).ready(function() {
    $("img").on("click", function(event) {
        var x = event.pageX - this.offsetLeft;
        var y = event.pageY - this.offsetTop;
     
    });
}); */
//TRATO DE CAMBIAR PIXELES DE DONDE CAE EL NUMERO  ALEATORIO ,POR MEDIO DE SCREEN.WIDTH Q TOMA EL ANCHO DE LA PANTALLA
let imagns = document.getElementById("main-canvas").parentNode;

function mobile(){
  var altura = screen.width;

  if (altura < 420) 
  imagns.innerHTML=(`   <div>
  <canvas class="tamaño" id="main-canvas" width="320" height="210">
  </canvas>
  </div>`); 
      WIDTH = 300;
     HEIGH= 200 ;
     console.log(WIDTH)}


     
const spanMinutos = document.querySelector(".minutos");
const spanSegundos = document.querySelector(".segundos");
const spanCentesimas = document.querySelector(".centesimas");


let minutos = 0;
let segundos = 0;
let centesimas = 0;

let corriendo = null;
let cambiar = false;

function dibujarTiempo() {
  spanMinutos.innerHTML = minutos;
  spanSegundos.innerHTML = segundos;
  spanCentesimas.innerHTML = centesimas;
}

function reiniciar() {
  minutos = 0;
  segundos = 0;
  centesimas = 0;
  dibujarTiempo();
}

function accion1() {
  if (corriendo) {
    detener();
    cambiar = false; //No deshabilitado.
  } else {
    cambiar = true; //Si, deshabilitado!
    iniciar();
  }
}

function iniciar() {
  const sumarMinuto = () => {
    if (minutos < 99) minutos++;
  };

  const sumarSegundo = () => {
    if (segundos === 59) {
      segundos = 0;
      sumarMinuto();
    } else {
      segundos++;
    }
  };

  const incrementar = () => {
    if (centesimas === 99) {
      centesimas = 0;
      sumarSegundo();
    } else {
      centesimas++;
    }
    dibujarTiempo();
  };
  corriendo = setInterval(incrementar, 10);
  /*  *setInterval arroja un valor que es un número
   *con el que luego se puede referenciar a ese intervalo (guardar en variable se puede)*/
}
function detener() {
  clearInterval(corriendo);
  corriendo = null;
}

function btn() {
    if (kain.paused) {
      kain.play();
    } else {
      kain.pause();
    }
  }

  //parallax //
let text =document.getElementById ("text");
let treeLeft =document.getElementById ("tree-left");
let treeRight =document.getElementById ("tree-right");
let gateLeft =document.getElementById ("gate-left");
let gateRight =document.getElementById ("gate-right");



window.addEventListener(`scroll`, ()=> {
  let value = window.scrollY;
  text.style.marginTop= value *2.5 + "px";
  treeLeft.style.left= value * -1.5 + "px";
  treeRight.style.left= value * 1.5 + "px";
  gateLeft.style.left= value * 0.5 + "px";
  gateRight.style.left= value * -0.5 + "px";
})