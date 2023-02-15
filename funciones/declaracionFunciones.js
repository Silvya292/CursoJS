// Trabajando con funciones
function saludar(nombre){
    console.log("Hola, "+nombre);
}

saludar("Silvia");

const nombre="Silvia";
saludar(nombre);

function despedir(nombre){
    console.log(nombre="Diego");
    console.log("Adiós, "+nombre);
}

let nombre2="David";
despedir(nombre2)
console.log(nombre2);

let persona={
    nombre:"Silvia",
    apellido:"Roldán"
};

function saludarPersona(objeto){
    objeto.apellido="López";
    console.log("Hola, "+objeto.nombre+" "+objeto.apellido);
};

saludarPersona(persona);

function imprimeNumero(numero=4){ // Parámetros por defecto
    console.log(numero);
}

imprimeNumero(7);
imprimeNumero();

// Se puede utilizar el factor de propagación
function imprimir(...parametro){
    console.log(parametro);
}

imprimir(1, 3, 9, 2, "hola", {id:9});

function suma(...nums){
    console.log(...nums);
    console.log(nums.reduce((a,b)=>a+b));
    return nums.reduce((a,b)=>a+b);
}

const s=suma(1, 2, 3, 4, 5);
console.log(s);

let variable="hola";
function multiplicar(a=0, b=0){
    console.log(variable);
    let variable2="adiós";
    return a*b;
}
console.log(multiplicar(4,9));
// console.log(variable2); Solo desde dentro de la función
