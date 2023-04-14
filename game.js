let WIDTH = 480; //es para donde va a caer el punto invisible que hay que descubir //cannvas
let HEIGH = 380; //le pongo un poco menos para que no quede tan a la orilla de la pantalla
mobile();

//captura de elemento y guarda el contexto
let mainCanvas = document.getElementById("main-canvas");
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

let cont = 0;

mainCanvas.addEventListener("click", function (e) {
  if (cont == 0) {
    iniciar();
    cont = cont + 1;
  }

  xx = e.offsetX;
  yy = e.offsetY;
  clicks++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  console.log(distance); // para ver en consolelog que
  drawRect(xx, yy); // pasar parametro de coordinadas//
  $parrafo.innerHTML = `<h1 class="titulo2" >${distanceHint}<h1>`;
  
  sound.play();

  //codigo para cuando se acerca demasiado y gana
  if (distance < 20 && distance > 0) {
    let corriendo2 = corriendo;
    detener();

    drawVampi(xx, yy);
    $parrafo.innerHTML = `<h1>GANASTE<h1>`;
    soundWin.play();

    //pongo tiempo para que tarrde en mostrar el alerta
    function encontrado() {
      Swal.fire({
        background: "rgb(10, 10, 10)",
   
        title: "Buen Trabajo, Encontramos La Tumba Del Vampiro En :" +
        clicks +
        " CLICKS",
        customClass: {
          title: "alert",
        },
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
        
      })
     
    }
    setTimeout(encontrado, 1500);

    //pongo tiempo para el reinicio
    function reinicio() {
      location.reload();
    }
    setTimeout(reinicio, 7000);
  }
});

$(document).ready(function () {
  var btn = $(".button");
  btn.click(function () {
    btn.toggleClass("paused");
    return false;
  });
});


