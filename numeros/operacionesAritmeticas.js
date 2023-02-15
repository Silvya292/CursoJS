// Principales operaciones aritméticas
let a=3.5;
let b=4.8;

// Suma +
console.log(a+b);
// Resta -
console.log(a-b);
//Multiplicación *
console.log(a*b);
//División /
console.log(a/b);

// Representación de números en cadenas de texto
console.log(typeof a);
let aS=a.toString();
console.log(aS);
console.log(typeof aS);

// Redondeo
let c=3.3;
let d=c*3;

console.log(d);
console.log(typeof d);

// Método toFixed() -> Limitar el número de decimales y convertir en string
console.log(d.toFixed(2));
console.log(typeof d.toFixed(2));

let e=1839.123456789;
console.log(e.toFixed(4));
let f=8912345678998765432;
console.log(f.toFixed(2));

// Método toPrecision() -> Limitar el número de cifras significativas y convertir en string
console.log(e.toPrecision(4));
console.log(e.toPrecision(7));

console.log(f.toPrecision(7));
console.log(typeof f.toPrecision(7));