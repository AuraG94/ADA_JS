// Pida al usuario que ingrese un número.
//Verifique si el número es positivo, negativo o igual a cero.
//Muestre un mensaje indicando cuál es el caso.

const prompt = require("prompt-sync")({ sigint: true });
//1 Pedir al usuario un número cualquiera 
let numero= parseFloat (prompt ('Ingresa cualquier numero:'));

//2 Verificamos si el numero es positivo, negativo o es igual a cero
if (numero > 0) {resultado= "positivo";
} else if (numero < 1) {resultado = "negativo o es cero";
} 

//3 Mostramos mensaje de resultado
console.log ("El numero es:" , resultado );