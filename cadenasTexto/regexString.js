// Expresiones regulares -> https://regexr.com

let text="Tito no es mun mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles.";

// Obtener todas las ocurrencias de una palabra
console.log(text.match(/los/g));
console.log(text.match(/no/g)); // También incluye las que están dentro de palabras

// Ver si contiene una palabra -> Este método también viene de los arrays
console.log(text.includes("comer"));
console.log(text.includes("terremoto"));

// Ver si un texto empieza con un string concreto
console.log(text.startsWith("Tito")); // Este método es case sensitive
console.log(text.startsWith("tito"));

// Ver si un texto termina con un string concreto
console.log(text.endsWith("."));
console.log(text.endsWith("a."));
