// Declara dos variables numéricas numero1 y numero2.
// Pide al usuario que ingrese dos números y muestra cuál es mayor o si son iguales.

const prompt = require("prompt-sync")({ sigint: true });

let numeroA = parseFloat (prompt ('Ingresa numero A: '));
let numeroB = parseFloat (prompt ('Ingresa numero B: '));
if (numeroA > numeroB) {resultado = "Numero A es mayor que B";
} else if (numeroA < numeroB) {resultado = "Numero A es menor que B";
 }  else  {resultado = "numeros son iguales";
 } 
console.log ("Resultado: " , resultado); 
