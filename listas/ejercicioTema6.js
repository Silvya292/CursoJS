// Ejercicio tema 6
const listaCompra=["Leche", "Pan", "Patata", "Arroz", "Lechuga"];
listaCompra.push("Aceite de girasol");
console.log(listaCompra);

listaCompra.pop();
console.log(listaCompra);

const peliculas=[
    {titulo:"Frozen", director:"Disney", fecha:2017},
    {titulo:"Enredados", director:"Disney", fecha:2009},
    {titulo:"Turning Red", director:"Pixar", fecha:2022}
];
const array1=peliculas.filter(peli=>peli.fecha>2010);
console.log(array1);

const array2=peliculas.map(peli=>peli.director);
console.log(array2);

const array3=peliculas.map(peli=>peli.titulo);
console.log(array3);

const array4=array2.concat(array3);
console.log(array4);

const  array5=[...array2,...array3];
console.log(array5);
