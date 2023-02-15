// Ejercicio 1 Tema 7 conjuntos.js
const nombres=["Silvia", "Rosa", "Javier"];
const set=new Set(nombres);
console.log(set);

set.add("Silvia");
console.log(set);

set.add("Javascript");
console.log(set);

//Ejercicio 2 Tema 7 objetos.js
const obj={
    nombre:"Silvia",
    apellido:"Roldán",
    edad:20,
    altura:167,
    eresDesarrollador:false
};

const edad=obj.edad;
console.log(edad);

const lista=[
    {
        ...obj
    },
    {
        nombre:"David",
        apellido:"Roldán",
        edad:27,
        altura:185,
        eresDesarrollador:true
    }
];
const listaOrdenada=lista.sort((a,b)=>b.edad-a.edad);
console.log(listaOrdenada);

// Ejercicio 3 Tema 7 fechas.js
const hoy=new Date();
const nacimiento=new Date(2002, 8, 2);
console.log(nacimiento);

const tarde=hoy>nacimiento;
console.log(tarde);

const dia=nacimiento.getDate();
console.log(dia);

const mes=nacimiento.getMonth()+1;
console.log(mes);

const year=nacimiento.getFullYear();
console.log(year);