// Ordenar arrays .sort()
const array=[2, 5, 9, 15, 1, 2, 0, 4];
console.log(array);

array.sort((a,b)=>{ // Modifica el valor del array inicial
    return -1;
});
console.log(array);

array.sort((a,b)=>{
    return 1;
});
console.log(array);

array.sort((a,b)=>{
    if(a<b){
        return -1;
    }
    else if(a>b){
        return 1;
    }
    else{
        return 0;
    }
});
console.log(array);

// Ordenar un array numérico
const arrayNum=[4, 1, 7, 3, 1, 3, 56, 1, 546];
arrayNum.sort((a,b)=>a-b); // De menor a mayor
console.log(arrayNum);

arrayNum.sort((a,b)=>b-a); // De mayor a menor
console.log(arrayNum);

// Array de objetos
const listaObjetos=[
    {nombre:"Silvia", edad:20},
    {nombre:"Gorka", edad:35},
    {nombre:"Miguel", edad:28}
];

listaObjetos.sort((a,b)=>{
    if(a.edad<b.edad){
        return -1;
    }
    else if(a.edad>b.edad){
        return 1;
    }
    else{
        return 0;
    }
});
console.log(listaObjetos);

listaObjetos.sort((a,b)=>b.edad-a.edad);
console.log(listaObjetos);