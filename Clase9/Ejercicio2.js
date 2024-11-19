// Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores numéricos de tu elección. 
//Pide al usuario que ingrese un número.
// Verifica si está dentro del rango definido por las constantes.

const prompt = require("prompt-sync")({ sigint: true });
let numero = parseFloat (prompt ('Ingresa un numero: '));
let RANGO_MAXIMO = 30;
let RANGO_MINIMO = 1;

if (numero <= 30) {resultado = "Tu numero esta dentro del rango";

 } else { resultado = "Tu numero no esta dentro del rango";

 }

 console.log ("Resultado: " , resultado)
   

