// Trabajando con fechas
const fecha=new Date();
console.log(fecha);

const fecha2=new Date(1987, 10, 20, 1, 23, 52, 192);
console.log(fecha2);
const fecha6=new Date(1987, 10, 20, 1, 23, 52, 192);

const fecha3=new Date(0);
console.log(fecha3);

const fecha4=new Date(-10000000);
console.log(fecha4);

const fecha5=new Date("October 13, 1979 12:15:15");
console.log(fecha5);

// Comparación de fechas con el operador <>
console.log(fecha>fecha2);
console.log(fecha<fecha2);

console.log(fecha6);
console.log(fecha2);
console.log(fecha2===fecha6); // ERROR no se pueden comparar de esta forma, solo en milisegundos

// Para convertir en ms
console.log(fecha2.getTime()===fecha6.getTime()); // Forma correcta

// Obtener el día, mes, año de una fecha

//Obtener el día con .getDate()
console.log(fecha2.getDate());

// Obtener el mes .getMonth()+1
console.log(fecha2.getMonth()+1);

// Obtener el año .getFullYear()
console.log(fecha2.getFullYear());

// Mostrar una fecha en un string .toLocaleDateString() -> para formas de fechas: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString());
console.log(fecha2.toLocaleDateString("en-US"));

