

//CREO UN NUMERO RANDON PARA DONDE VA A ESTAR EL TESORO//
let getRandomNumber = size => {
    return Math.floor( Math.random() * size);
}

//ACA CALCULO DONDE HACE CLICK CALCULO EJE X Y EJE Y//
let getDistance = (e, target) =>{
let diffx= e.offsetX - target.x;
let diffy= e.offsetY - target.y;

//aplico teorema de pitagoras//
return Math.sqrt((diffx*diffx) + (diffy*diffy));

}

//CREO UNA FUNCION FLECHA PARA DECIRLE QUE TAN LEJOS O CERCA ESTA//

let getDistanceHint = distance => {


if ( distance >0 && distance<20){
    return "GANASTE"
}
else if (distance<30){    
    return "muy cerca"
}else if (distance<100){   
    return "cerca"
}else if (distance<200){    
    return "no tan cerca"
}
else if (distance<300){  
    return "lejos "
}
else if (distance>450){    
    return "recontra lejos "
}
else return "super lejos"
console.log(distance)

}
/* 
$(document).ready(function() {
    $("img").on("click", function(event) {
        var x = event.pageX - this.offsetLeft;
        var y = event.pageY - this.offsetTop;
     
    });
}); */


//Uhmm la forma más sencilla es cambiando esa linea de alert, por una linea
 //que cree una imagen a traves de javascript https://www.w3schools.com/jsref/dom_obj_image.asp
 // y posicionandola con la coordenada del target.