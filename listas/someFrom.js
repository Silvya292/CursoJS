// Método .some()
const array=[3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2];
const result=array.some(valor=>valor<0);
console.log(result);

const existe=array.some(valor=>valor===9);
console.log(existe);

const listaObjetos=[
    {nombre:"Silvia", edad:20},
    {nombre:"Gorka", edad:35},
    {nombre:"Miguel", edad:28}
];

const existeSilvia=listaObjetos.some(persona=>persona.nombre==="Silvia");
console.log(existeSilvia);

// Obtener una lista a partir de un objeto iterable -> método .from()
const str="Hola soy Silvia";
console.log(str[5]);

const ar_str=Array.from(str);
console.log(ar_str);

const set=new Set([2, 3, "hola", 4]);
const ar_set=Array.from(set);
console.log(ar_set);

const keys=array.keys();
console.log(keys); // Objeto de tipo iterador

const ar_keys=Array.from(keys);
console.log(ar_keys);
