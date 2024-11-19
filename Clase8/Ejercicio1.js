//Solicite al usuario que ingrese un número cualquiera.
//Calcule el doble de ese número.
//Muestre el resultado en la consola.
const prompt = require("prompt-sync")({ sigint: true });

//1 Pedir al usuario un número cualquiera 
let numeroCualquiera = parseFloat (prompt ('Ingresa cualquier numero:'));

// 2 Multiplicamos por dos
let doble = numeroCualquiera *2;

// Mostramos el resultado.
console.log("El doble del número elegido es: " + doble);


