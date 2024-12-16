//Escribe un programa que le pida al usuario dos números enteros (inicio y fin). 
//El programa debe mostrar todos los números pares que se encuentran entre esos dos valores, 
//incluyendo los límites si son pares. Utiliza un ciclo for para recorrer 
//los números entre el inicio y el fin. Si el número inicial es mayor que el final, 
//el programa debe mostrar un mensaje indicando que los valores son inválidos.

const prompt = require("prompt-sync")({ sigint: true });
let numeroA = parseInt (prompt ('Ingresa un numero inicial: '));
let numeroB = parseInt (prompt ('Ingresa un numero final: '));

for ( let vuelta = numeroA; vuelta <= numeroB; vuelta++)
    if (vuelta % 2 === 0 ) {
        console.log ("Contando: " + vuelta , "y el numero es par "); 
    }  else {
        console.log ("Contando: " + vuelta , "y el numero es impar")
    } 
    