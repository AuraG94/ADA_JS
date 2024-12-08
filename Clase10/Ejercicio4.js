// Declara una variable llamada verdadero y asígnale un dato de tipo booleano (true o false).
// 2. Declara una variable llamada texto y asígnale un string de tu elección (puedes usar cualquier mensaje que prefieras).
// 3. Declara una variable llamada numero y asígnale un dato numérico (puedes usar cualquier número entero o decimal).
// 4. Declara una variable llamada nada y asígnale un valor que represente la ausencia de valor en JavaScript.

const prompt = require("prompt-sync")({ sigint: true });

let verdadero = true;
let falso = false;
let texto = "Sol";
let numero = 29;
let nada = null;
 
//1. Realiza una operación matemática usando la variable número, por ejemplo, suma o resta con otro número de tu elección.
let resta = numero - 4;
console.log ("El resultado de la resta es:" , resta); 

//2. Concatena el “string” de la variable texto con otro mensaje adicional.
 let mensaje = texto + "dame tu calor";
 console.log ("Mensaje completo: ", mensaje);

//3. Verifica si la variable “verdadero” es true o false y muestra un mensaje diferente según el resultado.
let resultado= verdadero && falso;
console.log (resultado); 
//4. Implementa una condición para verificar si la variable nada es null y muestra un mensaje si es así.
if (nada == null) {
    console.log ("La variable es null");
} else { 
    console.log ("La variable no es null");
}