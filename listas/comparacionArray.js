// Comparación de arrays .every()
const array=[4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40];

let result=array.every(valor=>{
    if(typeof valor>0){
        return true;
    }
    else{
        return false;
    }
});
console.log(result);

result=array.every(valor=>valor>0);
console.log(result);

// Comparación de listas
const ar1=[1, 2, 3, 4];
const ar2=[1, 2, 3, 4];
console.log(ar1==ar2); // No se pueden comparar así

const compararArray=(array_1, array_2)=>{
    if(array_1.length != array_2.length) return false
    const resultado=array_1.every((valor,i)=>valor===array_2[i])
    return resultado
}

console.log(compararArray(ar1,ar2));

const ar3=[1, 2, 3, 6];
console.log(compararArray(ar1,ar3));
