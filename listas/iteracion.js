// Iterar valores de un array
const array=["hola", 2, 5, 90, false, undefined];

// Forma poco eficiente
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}

// Forma más eficiente (ES6) -> .forEach()
array.forEach(valor=>{
    console.log(valor);
});

let suma=0;
const arrayNum=[3, 6, 2, 77, 2, 3, 93, 19];
arrayNum.forEach(valor=>{
    suma+=valor;
    console.log(valor);
});
console.log(suma);

// Búsqueda de un valor dentro de un array
// Búsque del elemento 90 de array
let variable=array.find(valor=>{
    if(valor==90){
        return true;
    }
})
console.log(variable);

variable=array.find(valor=>{
    if(valor==91){
        return true;
    }
})
console.log(variable);

const listaObjetos=[
    {nombre:"Silvia", edad:20},
    {nombre:"Gorka", edad:35},
    {nombre:"Miguel", edad:28}
];
let objeto=listaObjetos.find(o=>{
    if(o.nombre==="Silvia"){
        return true;
    }
});
console.log(objeto.edad);

objeto=listaObjetos.find(o=>{
    return o.nombre==="Silvia";
});
console.log(objeto.edad);

// Si la función solo tiene un return, se pueden eliminar las llaves y el propio return
objeto=listaObjetos.find(o=>o.nombre==="Silvia");
console.log(objeto.edad);

// Como se sabe que edad es una propiedad de un objeto se puede hacer
const {edad}=listaObjetos.find(o=>o.nombre==="Silvia");
console.log(edad);