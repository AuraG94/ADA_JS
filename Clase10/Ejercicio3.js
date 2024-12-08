//Validar que nuestros encuestados sean de 18 años de edad mínima y 99 años de edad máxima.
//Seran dos constantes (asignándoles los valores numéricos 18 y 99 respectivamente).
// Deberás pedirle al usuario que ingrese su edad para validarla usando parseInt

const prompt = require("prompt-sync")({ sigint: true });
const EDAD_MINIMA =18;
const EDAD_MAXIMA =99; 

let edad = parseInt (prompt ('Ingresa tu edad: '));
if (edad >= EDAD_MINIMA && edad <= EDAD_MAXIMA ) {
    console.log ("Tu edad se encuentra en el rango permitido "); 
} else  {
    console.log ("Tu edad no esta en el rango permitido");
}

