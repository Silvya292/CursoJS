// Bucles for
// for(inicialización;condicion;actualizacion){ }
for(let i=0;i<10;i++){
    console.log(i);
}

let lista=[1,3,5,7,9,11];
for(let i=0;i<lista.length;i++){
    console.log(lista[i]*2);
}

// Para listas
//For-of
for(let valor of lista){
    console.log(valor);
}

//For-each
lista.forEach(valor => {
    console.log(valor);
});

// For-in
let persona = {
    nombre:"Silvia",
    edad:20,
    isDeveloper:false
}

let prop="edad";
console.log(persona.prop);
console.log(persona[prop]);

for(let propiedad in persona){
    console.log(propiedad);
    console.log(persona);
    console.log(persona[propiedad]);
}