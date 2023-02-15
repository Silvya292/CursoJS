// Trabajar con métodos avanzados -> .map() .filter() .reduce()

// Método .map()
const array=["Córdoba", "Madrid", "Valencia", "Barcelona", "Tenerife"];
const ret=array.forEach(valor=>{console.log(valor);});
console.log(ret);

const newArray=array.map((valor,index)=>`${index+1} - ${valor}`);
console.log(newArray);

// Método .filter()
const listaObjetos=[
    {nombre:"Silvia", edad:20},
    {nombre:"Gorka", edad:35},
    {nombre:"Miguel", edad:28}
];
let adultos=listaObjetos.filter(objeto=>{
    if(objeto.edad>30){
        return true;
    }
    else{
        return false;
    }
});
console.log(adultos);

adultos=listaObjetos.filter(objeto=>objeto.edad>30);
console.log(adultos);

const nuevaLista=listaObjetos.filter(objeto=>objeto.nombre!="Miguel");
console.log(nuevaLista);

// Método .reduce()
const valores=[3, 56, 23, 5, 90, 100];
const suma=valores.reduce((acumulado, current, i, arrayOriginal)=>{
    console.log(acumulado); // Se obtiene el acumulado
    console.log(current);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado+current;
});
console.log(suma);