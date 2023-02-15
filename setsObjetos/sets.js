// Sets o conjuntos
const array=[1, 2, 3, 4, 5, 6, 1, 2, "hola", {id:5}, {id:5}];
console.log(array);

console.log({id:5}==={id:5}); // NO son técnicamente el mismo objeto

const set= new Set(array); // Conjunto no ordenado de valores únicos, aseguran que en un elemento iterable no hay elementos repetidos
console.log(set);

// También tienen .add()
set.add(9);
console.log(set);
set.add(10);
console.log(set);
set.add(2);
console.log(set); // En este caso no lo añade

// También se pueden eliminar valores con .delete()
set.delete("hola");
console.log(set);

// Para eliminar todos los valores del set existe .clear()
const set2=new Set(array);
set2.clear();
console.log(set2);

// Existe el método .has() similar al método includes() del array
console.log(array.includes(2));
console.log(set.has(4));
console.log(set.has("hola"));

// Tienen la propiedad .size
console.log(set.size); // Valores únicos

// Para hacer una iteración se puede utilizar el forEach()
set.forEach(valor=>{
    console.log(valor);
});

const it_set=set.values();
console.log(it_set); // Objeto iterador de los valores del set

// Con el factor de propagación
const ar_set=[...set];
console.log(ar_set); // Array con valores únicos
console.log(ar_set[2]);
