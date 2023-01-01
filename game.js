const WIDTH = 480;//es para donde va a caer el punto invisible que hay que descubir //cannvas
const HEIGH = 380;//le pongo un poco menos para que no quede tan a la orilla de la pantalla

//captura de elemento y guarda el contexto
const mainCanvas = document.getElementById("main-canvas");
const context = mainCanvas.getContext("2d");

let initialX;
let initialY;

let img = new Image();
img.src = "img/cementerio.jfif";
context.drawImage(img, 0, 0);
img.onload = function () {
  context.drawImage(img, 0, 0);
};

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGH),
};

//sonidos para el juego//
let sound = new Audio("sound/error2.mp3");
let soundWin = new Audio("sound/win.mp3");
let kain = new Audio("sound/kain.mp3");

/* const boton1 = document.getElementById("boton1");
const boton0 = document.getElementById("boton0");
boton1.addEventListener("click", accion1);
boton0.addEventListener("click", reiniciar);
 */
const spanMinutos = document.querySelector(".minutos");
const spanSegundos = document.querySelector(".segundos");
const spanCentesimas = document.querySelector(".centesimas");
/*
 *
 *Los tipos de selectores que usen podrán ser diferentes,
 *si les gusta mas así (o si lo necesitan por algo puntual).
 *En lugar de getElementById("boton1") también hubiera sido válido
 *usar querySelector("#boton1")
 *
 */

let minutos = 0;
let segundos = 0;
let centesimas = 0;

let corriendo = null;
let cambiar =false
function dibujarTiempo() {
  spanMinutos.innerHTML = minutos;
  spanSegundos.innerHTML = segundos;
  spanCentesimas.innerHTML = centesimas;

  /*
   *
   *Ojo con que es la propiedad innerHTML lo que debe cambiar
   *y no las referencias a los elementos seleccionados.
   *
   */
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

//para dibujar el tiempo desde el principio
dibujarTiempo();

//imagen de la X
var equis = new Image();
equis.src = "img/xx.png";

const drawRect = (xx, yy) => {
  context.fillStyle = "rgb(200,0,0)";
  context.drawImage(equis, xx, yy);
};

// imagen en chiquita del vampiro
var vampiro = new Image();
vampiro.src = "img/vampi2.png";

const drawVampi = (xx, yy) => {
  context.fillStyle = "rgb(200,0,0)";
  context.drawImage(vampiro, xx, yy);
};

let $parrafo = document.getElementById("parrafo");
let clicks = 0;

let cont =0
mainCanvas.addEventListener("click", function (e) {
  if (cont ==0){
      iniciar();
      cont = cont+ 1;
    }
    
  xx = e.offsetX;
  yy = e.offsetY;
  clicks++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  console.log(distance); // para ver en consolelog que
  drawRect(xx, yy); // pasar parametro de coordinadas//
  $parrafo.innerHTML = `<h1>${distanceHint}<h1>`;

  sound.play();

  //codigo para cuando se acerca demasiado y gana
  if (distance < 20 && distance > 0) {
    detener();

    drawVampi(xx, yy);
    $parrafo.innerHTML = `<h1>GANASTE<h1>`;
    soundWin.play();

    //pongo tiempo para que tarrde en mostrar el alerta
    function encontrado() {
      alert(`Encontraste La Tumba Del Vampiro En : ${clicks} clicks`);
    }
    setTimeout(encontrado, 1500);
    //pongo tiempo para el reinicio
    function reinicio() {
      location.reload();
    }
    setTimeout(reinicio, 5000);
  }
});


$(document).ready(function () {
  var btn = $(".button");
  btn.click(function () {
    btn.toggleClass("paused");
    return false;
  });
});

function btn() {
  if (kain.paused) {
    kain.play();
  } else {
    kain.pause();
  }
}