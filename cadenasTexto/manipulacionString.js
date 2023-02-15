// Manipulación de cadenas de texto
let input="Virgo";
let database="virgo";

console.log(input===database);

// Métodos toLowerCase() o toUpperCase()
// Existen también toLocaleLowerCase() o toLocaleUpperCase() para idiomas que no siguen el código ASCII
console.log(input.toLowerCase());
console.log(input.toUpperCase());
console.log(input.toLowerCase()===database.toLowerCase());

// Concatenación
let str_1="Primera cadena";
let str_2="Y esta es la segunda";

// Método concat
console.log(str_1.concat(" ", str_2, "."));

// Método operador + -> En el caso de ser números se suman de forma numérica
console.log(str_1 + " " + str_2);

// Método con ` `
console.log(`${str_1} ${str_2}`);

// Eliminar espacios al inicio y al final
let str_3="      String con espacios al final.     ";
console.log(str_3.length);

// Método trim()
console.log(str_3.trim().length);
console.log(str_3.trim());

console.log(str_3.trimStart());
console.log(str_3.trimStart().length);

console.log(str_3.trimEnd());
console.log(str_3.trimEnd().length);

// Obtener caracter en una posición concreta
let str_4="String número 4";
console.log(str_4.charAt(14));

// Se puede tratar un string como un array
console.log(str_4[14]);

// Obtener la posición de una palabra dentro de una cadena
let str_5="Hola soy Silvia y estudio informática.";
console.log(str_5.indexOf("Silvia")); // Posición de la primera letra
console.log(str_5.indexOf("por"));
console.log(str_5.charAt(9));

let str_6="Hola soy Silvia y estudio informática. Hola soy Silvia y estudio informática.";
console.log(str_6.lastIndexOf("Silvia"));
console.log(str_6[48]);

