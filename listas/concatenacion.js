// Unir dos listas con .concat()
const lista1=["hola", 2, false, null];
const lista2=["adiós", 8, true, undefined];
console.log(lista1.concat(lista2));
console.log(lista1); // No modifica los valores de las listas
console.log(lista2);

const lista3=lista1.concat(lista2);
console.log(lista3);

// Unir dos listas con el factor de propagación
console.log(...lista3); // Trata los valores por separado

const lista4=[...lista1,...lista2];
console.log(lista4);

// ERROR!!
const lista5=[lista1, lista2];
console.log(lista5);