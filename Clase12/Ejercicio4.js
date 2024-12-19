//Crear un programa que permita registrar las notas de varios estudiantes
//usando arrays y mostrarlas por pantalla:
//1.Crear un array para almacenar las notas.
//2.Define un array vacío llamado notas donde almacenaremos las notas de los estudiantes.
//3.Pide al usuario que ingrese las notas de varios estudiantes
 //una por una utilizando el método prompt.
//4.Usa un bucle for para solicitar las notas y asignarlas
//directamente a posiciones específicas del array notas.
//5.Imprime en consola las notas ingresadas usando el array notas.

const prompt = require("prompt-sync")({ sigint: true });

let notas = [] //Hago un array vacio
const alumnos =  5 //Defino el numero de cuantos estudiantes tendre

console.log(`Por favor ingresas las notas para ${alumnos} alumnos distintos`) //Pido al usuario que me de las notas de los 5 alumnos

for ( let i = 0; i < alumnos; i++) {
    let notasIngresadas = parseInt (prompt (`La nota del alumno ${i + 1}: `));
notas [i] = notasIngresadas;
}

console.log ("Las notas que fueron ingresadas son: ");
for (let i = 0; i < notas.length; i++) {
    console.log (`El Alumno ${i + 1}: ${notas[i]}`);
}

