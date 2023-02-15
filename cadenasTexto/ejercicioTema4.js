// Ejercicio tema 4
let nombre="Silvia";
let apellido="Roldán";

let estudiante=nombre + " " + apellido;
console.log(estudiante);

let estudianteMayus=estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus=estudiante.toLowerCase();
console.log(estudianteMinus);

let letrasEstudiante=estudiante.length;
console.log(letrasEstudiante);

let letraInicial=nombre.charAt(0);
console.log(letraInicial);

let letraFinal=apellido.charAt(apellido.length-1);
console.log(letraFinal);

let estudianteSinEspacios=estudiante.replace(" ","");
console.log(estudianteSinEspacios);

let contains=estudiante.includes(nombre);
console.log(contains);