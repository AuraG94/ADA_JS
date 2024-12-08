//Declara y asigna un valor numérico a dos variables:
//primerNumero y segundoNumero.

//Declara las siguientes variables: resultadoSuma, resultadoResta,
// resultadoMultiplicacion, resultadoDivision.

//Asigna a cada una de estas variables el resultado de la suma, resta, 
//multiplicación y división de las variables primerNumero y segundoNumero.

//Utiliza console.log(nombreDeLaVariable) para imprimir cada uno de los resultados y ver
// cómo se ven los mismos.

const prompt = require("prompt-sync")({ sigint: true });
let primerNumero = 2;
let segundoNumero = 6;

let resultadoSuma = (primerNumero + segundoNumero);
console.log ( "La suma es igual a:" , resultadoSuma);

let resultadoResta = (primerNumero - segundoNumero);
console.log ("La resta es igual a:" , resultadoResta);

let resultadoMultiplicacion = (primerNumero * segundoNumero);
console.log ("La multiplicacion es igual: " , resultadoMultiplicacion);

let resultadoDivision = (primerNumero / segundoNumero);
console.log ("La division es igual a: " , resultadoDivision);