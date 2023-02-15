// Operador .valueOf() -> Obtener valores numéricos a partir de literales (No se suele utilizar)
let a=2;
let b=new Number(3); // Casting

console.log(a);
console.log(b);
console.log(a+b);

console.log(b.valueOf());
console.log(a.valueOf()+b.valueOf()); // Es lo mismo que antes, JS lo hace solo

let str=new String("Esto es un string");
console.log(str);
console.log(str.valueOf());

// NaN (Not a Number) e Infinity
let n=Number('string');
console.log(n);
console.log(isNaN(n));

let numerador=19;
let divisor=2;
console.log(numerador/divisor);

divisor=0;
console.log(numerador/divisor);

divisor=null;
console.log(numerador/divisor);

// Cómo convertir los string a valores numéricos con Number, parseInt y parseFloat
let num='5.89';
let num2=17.2;
console.log(typeof numero);
console.log(num+num2); // Concatena porque uno es un string

console.log(Number(num)+num2);

console.log(parseInt(num));
console.log(parseFloat(num));

let num3=4;
console.log(parseInt(num3));
console.log(parseFloat(num3));

// Números hexadecimales (base 16)
let numHex='0x3a5b7';
console.log(parseInt(numHex));

// Obtener valores máximo y mínimo en JS
let minPrecision=Number.EPSILON; // Mínima diferencia que puede haber entre dos números
let min=Number.MIN_VALUE;
let max=Number.MAX_VALUE;
console.log(min);
console.log(max);
console.log(minPrecision);

console.log(2 ** 1024); // ** significa elevado