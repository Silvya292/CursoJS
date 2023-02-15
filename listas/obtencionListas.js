// Obtención de una lista a partir de otra: .slice() -> No modifica el valor del array original
const array=["hola", 1, 2, 3, true, null, "adiós"];
console.log(array.slice(1,4));

const array2=array.slice(2,5);
console.log(array2);

const array3=array.slice(2,-2);
console.log(array3);