//Pida al usuario que ingrese dos números.
//Sume ambos números.
//Muestre el resultado de la suma.

const prompt = require("prompt-sync")({ sigint: true });

let numeroA = parseFloat (prompt ('Ingresa numero A: '));
let numeroB = parseFloat (prompt ('Ingresa numero B: '));
let resultado = numeroA + numeroB;

console.log ("La suma de ambos numeros es:" , resultado );


