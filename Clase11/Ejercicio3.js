//Crea un programa que le pida al usuario un número positivo. 
//El programa deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola. 
//Usa un ciclo for para realizar la tarea.

const prompt = require("prompt-sync")({ sigint: true });
let numero = parseInt (prompt ('Ingresa un numero mayor a 0: '));

for ( let vuelta = 0; vuelta <= numero; vuelta++) {
    console.log ("Contando: " + vuelta);
}