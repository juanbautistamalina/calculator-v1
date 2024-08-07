// Pantalla
const display = document.querySelector(".display")

// Operaciones
const suma = document.getElementById("+");
const resta = document.getElementById("-");
const multiplicacion = document.getElementById("*");
const division = document.getElementById("/");
const igual = document.getElementById("=");

// Números
const num0 = document.getElementById("0");
const num1 = document.getElementById("1");
const num2 = document.getElementById("2");
const num3 = document.getElementById("3");
const num4 = document.getElementById("4");
const num5 = document.getElementById("5");
const num6 = document.getElementById("6");
const num7 = document.getElementById("7");
const num8 = document.getElementById("8");
const num9 = document.getElementById("9");

// Botones de Funcionalidad
const ac = document.getElementById("ac");
const de = document.getElementById("de");
const punto = document.getElementById(".");

// Variables para las operaciones
let valorActual = 0;
let total = 0;
let numerosPantalla = [];
let numeros = [];


// ---------------------------------------------

// FUNCIONALIDAD DE LOS NÚMEROS

num0.addEventListener("click", () =>{
    display.value += "0";
})

num1.addEventListener("click", () =>{
    display.value += "1";
})

num2.addEventListener("click", () =>{
    display.value += "2";
})

num3.addEventListener("click", () =>{
    display.value += "3";
})

num4.addEventListener("click", () =>{
    display.value += "4";
});

num5.addEventListener("click", () =>{
    display.value += "5";
})

num6.addEventListener("click", () =>{
    display.value += "6";
})

num7.addEventListener("click", () =>{
    display.value += "7";
})

num8.addEventListener("click", () =>{
    display.value += "8";
})

num9.addEventListener("click", () =>{
    display.value += "9";
})

punto.addEventListener("click", () =>{
    display.value += ".";
})

// ---------------------------------------------
// FUNCIONALIDAD DE LOS BOTONES DE OPERACIONES
suma.addEventListener("click", () =>{
    valorActual = display.value;
    display.value += "+"
    operacion = "suma";
})

resta.addEventListener("click", () =>{
    valorActual = display.value;
    display.value += "-"
    operacion = "resta";
})

multiplicacion.addEventListener("click", () =>{
    valorActual = display.value;
    display.value += "*"
    operacion = "multiplicacion";
})


division.addEventListener("click", () =>{
    valorActual = display.value;
    display.value += "/"
    operacion = "division";
})

// ---------------------------------------------

igual.addEventListener("click", () => {
    if(operacion == "suma"){
        
        numeros = [display.value].toString().split("+");
        
        for(let i = 0; i<numeros.length;i++){
            total += parseInt(numeros[i]);
        }

        
    }
    else if(operacion == "resta"){
        numeros = [display.value].toString().split("-");
        
        total = numeros[0];

        for(let i = 1; i<numeros.length;i++){
            total -= parseInt(numeros[i]);
        }
        
        
    }
    else if(operacion == "multiplicacion"){
        numeros = [display.value].toString().split("*");
        
        total = numeros[0];
        for(let i = 1; i<numeros.length;i++){
            total *= parseInt(numeros[i]);
        }
    }
    else if(operacion == "division"){
        numeros = [display.value].toString().split("/");
        
        total = numeros[0];
        for(let i = 1; i<numeros.length;i++){
            total /= parseInt(numeros[i]);
        }
    }
    
    display.value = total;
    total = 0;
})

// FUNCIONALIDAD DE BOTONES ESPECIALES
ac.addEventListener("click", () =>{
    display.value = " "
    valorActual = 0;
    total = 0;
})


de.addEventListener("click", () =>{

    // Array con los números en pantalla
    numerosPantalla.push(display.value);
    
    // Convierto el array a string
    numerosStr = [numerosPantalla[numerosPantalla.length-1]].toString();
    
    let numerosModificados = "";
    
    // Guardo todos los números menos el último en una nueva variable
    for(let i = 0; i < (numerosStr.length - 1); i++){
        numerosModificados += numerosStr[i];
    }

    // Muestro el número modificado en la pantalla
    display.value = numerosModificados;
})

