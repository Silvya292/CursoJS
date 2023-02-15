// Funciones de tipo flecha y anónimas
const array=[1, 5, 6, 2, 7, 12, 8, 92];
const array2=array.map(function(valor){ // Se deberían utlizar las funciones de tipo flecha
    return valor*2;
});
console.log(array2);

const array3=array.map((valor)=>valor*2);
console.log(array3);

// const dobleDelValor(6);

const dobleDelValor=valor=>valor*2; // Función de tipo flecha
function doble(valor){
    return valor*2;
};
console.log(doble(6));
console.log(dobleDelValor(6));

const array4=array.map(dobleDelValor);
console.log(array4);