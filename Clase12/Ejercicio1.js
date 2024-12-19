//Crea un programa que solicite al usuario ingresar números continuamente
//hasta que el usuario ingrese un número negativo. Luego, imprime la suma
//de todos los números ingresados.

const prompt = require("prompt-sync")({ sigint: true });

let suma = 0;
let numero = parseInt (prompt ('Ingresa un numero: '));

while  (numero >= 0) {
    suma += numero;
    numero = parseInt (prompt ('Ingresa un numero: '));
}

console.log (`la suema de los numeros ingresados es: ${suma}`);

//¿No debería existir un paso donde al usuario se le pidiera colocar un número negativo? 
