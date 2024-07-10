let númeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMax = 10

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let númeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    console.log(intentos); 
    if (númeroDeUsuario === númeroSecreto) {
     asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
     document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (númeroDeUsuario > númeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor")
        }
        intentos++; 
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = ""; 
}

function generarNúmeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
   
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
//si ya sorteamos todos los numeros
if (listaNumerosSorteados.length == numeroMax) {
    asignarTextoElemento("p", "Ya se sortearon todos los números posibles")
} else {
//si el numero generado esta en la lista 
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNúmeroSecreto();
     } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;

     }
}

 
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMax}`);
    númeroSecreto = generarNúmeroSecreto();
    intentos = 1
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el número aleatorio
    //inicar el número de intentos
   condicionesIniciales();
    //desabilitar el botón de nuevo juego 
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
     
}

condicionesIniciales();