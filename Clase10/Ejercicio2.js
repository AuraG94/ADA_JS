// Escribe un programa que pida al usuario que ingrese su nombre, su edad y su peso, 
//y luego muestre un mensaje personalizado que incluya toda esta información.

const prompt = require("prompt-sync")({ sigint: true });
let nombre = (prompt ('Ingresa tu nombre: '));
let edad = parseInt (prompt ('Ingresa tu edad: '));
let peso = parseFloat (prompt ('Ingresa tu peso: '));

console.log ("Hola: ", nombre);
console.log ("Tu edad es: " , edad);
console.log ("Tu peso es: " , peso);

