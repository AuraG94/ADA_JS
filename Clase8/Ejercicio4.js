//Solicite al usuario que ingrese un número entero.
//Determine si el número es par o impar.
//Muestre un mensaje indicando si el número es par o impar.

const prompt = require("prompt-sync")({ sigint: true });

let numero = parseFloat (prompt ('Ingresa un numero entero: '));
let resultado = ""
if (numero % 2 === 0) {resultado = "par";
} else { resultado = "impar";
}

console.log ("El numero es: " , resultado); 