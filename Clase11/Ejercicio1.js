// Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa
//que le pida al usuario un número cualquiera. El programa deberá analizar si el
//número ingresado es positivo, negativo o cero. Utiliza estructuras if para
//resolverlo y muestra un mensaje explicativo en cada caso. 

const prompt = require("prompt-sync")({ sigint: true });
let numero = parseInt (prompt ('Ingresa un numero: '));

if (numero > 0 ) {
    console.log ("Numero positivo "); 
} else if (numero < 0) {
    console.log ("Numero negativo");
} else {
    console.log ("El numero es cero ")
} 