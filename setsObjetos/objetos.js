// Trabajando con objetos
const obj={
    id:4,
    nombre:"Silvia",
    apellido:"Roldán",
    isDeveloper: false,
    librosFavoritos:["El mentiroso", "El método"],
    "4-juegos":[1, 2, 3, 4]
};

// Para acceder a los valores
console.log(obj["4-juegos"]);
console.log(obj.id);

const prop="isDeveloper";
console.log(obj[prop]);

const obj2=obj; // Al asignar un objeto a otro se copia también la referencia en memoria
console.log(obj2);

obj2.nombre="David";
console.log(obj2.nombre);
console.log(obj.nombre); // Cambia también el objeto original

let val=4;
let val2=val; // Sí se hace una copia
console.log(val2);
val2=9;
console.log(val2);
console.log(val);

// Al igual que con listas, para copiar objetos se puede utilizar el factor de propagación
const obj3={...obj};
console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre="Javier";
console.log(obj.nombre);
console.log(obj3.nombre);

// Ordenar listas de objetos en función de un parámetro o propiedad
const peliculas=[
    {titulo:"Lo que el viento se llevó", fecha:1939},
    {titulo:"Titanic", fecha:1997},
    {titulo:"Turning Red", fecha:2022},
    {titulo:"Moana", fecha:2016},
    {titulo:"Ted", fecha:2012}
];
console.log(peliculas);

// Para ordenar se utiliza .sort() -> MUTA el valor de la lista original
peliculas.sort((a,b)=>a.fecha-b.fecha); // enor a mayor
console.log(peliculas);