const ALTURA_CANVAS = 420,
    ANCHURA_CANVAS = 420;
BORDE_CANVAS = 2;
// Obtener el elemento del DOM
const canvas = document.querySelector("#canvas");
canvas.width = ANCHURA_CANVAS;
canvas.height = ALTURA_CANVAS;
canvas.border = BORDE_CANVAS;
// Del canvas, obtener el contexto para poder dibujar
const contexto = canvas.getContext("2d");
// Comenzar
contexto.beginPath();
// Grosor de línea
contexto.lineWidth = 3;
// Color de línea 
contexto.strokeStyle = "#00C6BA";
// Comenzamos en 0, 0
contexto.moveTo(140, 0);
// Hacemos una línea hasta 48, 48
contexto.lineTo(140, 420);
contexto.stroke(); // "Guardar" cambios


// Otra línea
contexto.beginPath();
contexto.strokeStyle = "#00C6BA";
contexto.moveTo(280, 0);
contexto.lineTo(280, 420);
contexto.stroke();


// Otra línea
contexto.beginPath();
contexto.strokeStyle = "#00C6BA";
contexto.moveTo(0, 140);
contexto.lineTo(420, 140);
contexto.stroke();


// Otra línea
contexto.beginPath();
contexto.strokeStyle = "#00C6BA";
contexto.moveTo(0, 280);
contexto.lineTo(420, 280);
contexto.stroke();





function showCoords(event) {
    var x = event.pageX;
    var y = event.pageY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("prueba").innerHTML = coords;

    var dibujo_x =  function dx(x,y){
        contexto.beginPath();
        contexto.strokeStyle = "#00C6BA";
        contexto.moveTo(40, 40);
        contexto.lineTo(100, 100);
        contexto.stroke();

        contexto.beginPath();
        contexto.strokeStyle = "#00C6BA";
        contexto.moveTo(40, 100);
        contexto.lineTo(100, 40);
        contexto.stroke();
    }

    if (x <= 345 && y <= 286) {
        dibujo_x(x,y);
    }
}

