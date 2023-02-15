// Trabajar con listas
let num=3;
let array=[1, "hola", false, {id:1}, null, undefined, num];
console.log(array);

// Acceder a los valores de un array a través de su posición
console.log(array[4]);

// Métodos para introducir nuevos valores: .push() y .unshift() -> Mutan el valor del array

// Añadir valores al final
array.push("final", true);
console.log(array);

// Añadir valores al principio
array.unshift("inicio", null);
console.log(array);

// Métodos para eliminar valores: .pop() y .shift() -> Mutan el valor del array
let array2=[1, 3, "hola", false];

// Eliminar valores finales
array2.pop();
console.log(array2);

// Eliminar valores iniciales
array2.shift();
console.log(array2);

// Método para eliminar, modificar o añadir valores en el array -> splice()
let array3=[1, 2, 3, 4, 5, 6];

// Eliminar valores .splice(inicio, cuántos)
array3.splice(2, 2);
console.log(array3);

// Añadir valores .splice(inicio, 0, valores)
array3.splice(2, 0, "hola");
console.log(array3);

// Modificar valores
array3.splice(2, 1, 3, "adiós");
console.log(array3);