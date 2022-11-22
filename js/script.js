const ALTURA_CANVAS = 420,
    ANCHURA_CANVAS = 420;
BORDE_CANVAS = 2;
// Obtener el elemento del DOM
const canvas = document.querySelector("#canvas");
const btn = document.querySelector("#btn");

canvas.width = ANCHURA_CANVAS;
canvas.height = ALTURA_CANVAS;
canvas.border = BORDE_CANVAS;
// Del canvas, obtener el contexto para poder dibujar
const contexto = canvas.getContext("2d");


// -----------------------------TABLERO------------------------------
// Comenzar
contexto.beginPath();
contexto.lineWidth = 3;
contexto.strokeStyle = "#00C6BA";
contexto.moveTo(140, 0);
contexto.lineTo(140, 420);
contexto.stroke();

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
    // ---------------------------------------------------------------------------------------------------
    // ---------------------PRIMERA FILA---------------------------
    // ---------------------X EN PRIMERA CASILLA--------------------
    // dibujo_x1_1, por primera fila primer cuadrado

    var dibujo_x1_1 = function dx(x, y) {

        // Primera linea diagonal hacia la derecha
        contexto.beginPath();
        contexto.strokeStyle = "#00C6BA";
        contexto.moveTo(40, 40);
        contexto.lineTo(100, 100);
        contexto.stroke();
        // Segunda linea diagonal hacia la izquierda
        contexto.beginPath();
        contexto.strokeStyle = "#00C6BA";
        contexto.moveTo(40, 100);
        contexto.lineTo(100, 40);
        contexto.stroke();
    }

    // ---------------------X EN SEGUNDA CASILLA--------------------
    // dibujo_x1_2,primera fila segundo cuadrado hacia la derecha

    var dibujo_x1_2 = function dx2(x, y) {
        // Primera linea diagonal hacia la derecha
        contexto.beginPath();
        contexto.strokeStyle = "#00C6BA";
        contexto.moveTo(180, 40); //(x,y)
        contexto.lineTo(240, 100); //(x2,y2)
        contexto.stroke();
        // Segunda linea diagonal hacia la izquierda
        contexto.beginPath();
        contexto.strokeStyle = "#00C6BA";
        contexto.moveTo(240, 40);  //Se toman estos valores cruzados de arriba, (x2,y)
        contexto.lineTo(180, 100); //(x,y2)
        contexto.stroke();
    }

    // ---------------------X EN TERCERA CASILLA--------------------
    // dibujo_x1_3,primera fila tercer cuadrado hacia la derecha

    var dibujo_x1_3 =  function dx3(x,y){
        // Primera linea diagonal hacia la derecha
        contexto.beginPath();
        contexto.strokeStyle = "#00C6BA";
        contexto.moveTo(320, 40); //(x,y)
        contexto.lineTo(380, 100); //(x2,y2)
        contexto.stroke();
        // Segunda linea diagonal hacia la izquierda
        contexto.beginPath();
        contexto.strokeStyle = "#00C6BA";
        contexto.moveTo(380, 40);
        contexto.lineTo(320, 100);
        contexto.stroke();
    }


    // ---------------------------------------------------------------------------------------------------
    // ---------------------SEGUNDA FILA---------------------------
    // ---------------------X EN PRIMERA CASILLA--------------------
    // dibujo_x2_1,segunda fila primer cuadrado

    var dibujo_x2_1 =  function dx(x,y){
        // Primera linea diagonal hacia la derecha
        contexto.beginPath();
        contexto.strokeStyle = "#00C6BA";
        contexto.moveTo(40, 176);
        contexto.lineTo(100, 236);
        contexto.stroke();
        // Segunda linea diagonal hacia la izquierda
        contexto.beginPath();
        contexto.strokeStyle = "#00C6BA";
        contexto.moveTo(100, 176);
        contexto.lineTo(40, 236);
        contexto.stroke();
    }

    // ---------------------X EN SEGUNDA CASILLA--------------------
    // dibujo_x2_2,segunda fila segundo cuadrado hacia la derecha

    var dibujo_x2_2 =  function dx(x,y){
        // Primera linea diagonal hacia la derecha
        contexto.beginPath();
        contexto.strokeStyle = "#00C6BA";
        contexto.moveTo(176, 176);
        contexto.lineTo(236, 236);
        contexto.stroke();
        // Segunda linea diagonal hacia la izquierda
        contexto.beginPath();
        contexto.strokeStyle = "#00C6BA";
        contexto.moveTo(176, 236);
        contexto.lineTo(236, 176);
        contexto.stroke();
    }

    // ---------------------X EN TERCERA CASILLA--------------------
    // dibujo_x2_3,segunda fila tercer cuadrado hacia la derecha
    var dibujo_x2_3 =  function dx(x,y){
        // Primera linea diagonal hacia la derecha
        contexto.beginPath();
        contexto.strokeStyle = "#00C6BA";
        contexto.moveTo(320, 176);
        contexto.lineTo(380, 236);
        contexto.stroke();
        // Segunda linea diagonal hacia la izquierda
        contexto.beginPath();
        contexto.strokeStyle = "#00C6BA";
        contexto.moveTo(380, 176);
        contexto.lineTo(320, 236);
        contexto.stroke();
    }

    // ---------------------------------------------------------------------------------------------------
    // ---------------------TERCERA FILA---------------------------
    // ---------------------X EN PRIMERA CASILLA--------------------
    // dibujo_x3_1,tercera fila primer cuadrado hacia la derecha

    var dibujo_x3_1 =  function dx(x,y){
        // Primera linea diagonal hacia la derecha
        contexto.beginPath();
        contexto.strokeStyle = "#00C6BA";
        contexto.moveTo(40, 312);
        contexto.lineTo(100, 372);
        contexto.stroke();
        // Segunda linea diagonal hacia la izquierda
        contexto.beginPath();
        contexto.strokeStyle = "#00C6BA";
        contexto.moveTo(100, 312);
        contexto.lineTo(40, 372);
        contexto.stroke();
    }

    // ---------------------X EN SEGUNDA CASILLA--------------------
    // dibujo_x3_2,tercera fila segundo cuadrado hacia la derecha

    var dibujo_x3_2 =  function dx(x,y){
        // Primera linea diagonal hacia la derecha
        contexto.beginPath();
        contexto.strokeStyle = "#00C6BA";
        contexto.moveTo(176, 312);
        contexto.lineTo(236, 372);
        contexto.stroke();
        // Segunda linea diagonal hacia la izquierda
        contexto.beginPath();
        contexto.strokeStyle = "#00C6BA";
        contexto.moveTo(236, 312);
        contexto.lineTo(176, 372);
        contexto.stroke();
    }

    // ---------------------X EN TERCERA CASILLA--------------------
    // dibujo_x3_3,tercera fila tercer cuadrado hacia la derecha

    var dibujo_x3_3 =  function dx(x,y){
        // Primera linea diagonal hacia la derecha
        contexto.beginPath();
        contexto.strokeStyle = "#00C6BA";
        contexto.moveTo(320, 312);
        contexto.lineTo(380, 372);
        contexto.stroke();
        // Segunda linea diagonal hacia la izquierda
        contexto.beginPath();
        contexto.strokeStyle = "#00C6BA";
        contexto.moveTo(380, 312);
        contexto.lineTo(320, 372);
        contexto.stroke();
    }

    if (x <= 345 && y <= 286) {
        // x en primera fila primera casilla
        dibujo_x1_1(x, y);
    } else if (x >= 350 && x <= 483 && y <= 283) {
        // x en primera fila segunda casilla
        dibujo_x1_2(x, y);
    }else if  (x >= 489 && x <= 625 && y <= 283){
        // x en primera fila tercera casilla
        dibujo_x1_3(x, y);
    }else if(x <= 345 && y >= 290 && y <= 423){
        // x en segunda fila primera casilla
        dibujo_x2_1(x, y);
    }else if(x >= 350 && x <= 483 && y >= 290 && y <= 423){
        // x en segunda fila segunda casilla
        dibujo_x2_2(x, y);
    }else if(x >= 489 && x <= 625 && y >= 290 && y <= 423){
        // x en segunda fila tercera casilla
        dibujo_x2_3(x, y);
    }else if(x <= 345 && y >= 290 && y >= 429){
        // x en tercera fila primera casilla
        dibujo_x3_1 (x, y);
    }else if(x >= 350 && x <= 483 && y >= 429){
        // x en tercera fila segunda casilla
        dibujo_x3_2(x, y);
    }else if(x >= 489 && x <= 625 && y >= 429){
        // x en tercera fila tercera casilla
        dibujo_x3_3(x, y);
    }
}