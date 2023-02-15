// Listas o arrays
const lista=[1, "hola", true, null, undefined];
console.log(lista);

const lista2=new Array(1, "hola", true, null, undefined);
console.log(lista2);

const lista3=new Array(3);
console.log(lista3);
lista3[0]="Primer elemento";
console.log(lista3);

const lista4=[lista, lista2, lista3];
console.log(lista4);

// Objetos
const movil={ //Se pueden modificar los valores de los atributos, pero no el objeto (es const)
    altura:10,
    anchura:5,
    marca:"Apple",
    isWhite:false,
    contactos:["Silvia", "Alba"],
    tarjeta:{
        marca:"Sandisk",
        almacenamiento:32
    },
    "altura-tarjeta":4 //Para que pueda tener un - el atributo tiene que estar entre ""
}
console.log(movil["altura-tarjeta"]);

movil.year=2019;

console.log(movil.contactos);
console.log(movil.tarjeta.marca);
console.log(movil.year);

movil.marca="Xiaomi";
console.log(movil.marca);

// Fechas
// Librerías de apoyo -> Moment.js
const ahora=new Date();
console.log(ahora);

const fecha_milisegundos=new Date(10); // Utilizando milisegundos
console.log(fecha_milisegundos);

const fecha_cadena=new Date("march 25 2020");
console.log(fecha_cadena);

const fecha=new Date(2022, 0, 15); // Los meses se toman como los arrays
console.log(fecha);

const dia=ahora.getDate();
const mes=ahora.getMonth()+1; // Para formato legible
const year=ahora.getFullYear();
console.log(dia, mes, year);