// Métodos más utilizados con cadenas de caracteres

// Obtener longitud de un String -> Propiedad
let str="String de prueba";
console.log(str.length);

// Obtener partes de string -> 3 opciones: slice(), substring(), substr()
let slice_str=str.slice(0,6);
console.log(slice_str);

let substring_str=str.substring(0,6);
console.log(substring_str);

// Obsoleto/Deprecated
let substr_str=str.substr(0,5);
console.log(substr_str);

// Reemplazar parte del contenido de un String
let cadena="Hola mi nombre es Silvia";
console.log(cadena);

cadena.replace('Silvia','Silvya292');
console.log(cadena); // No modifica la cadena como variable

console.log(cadena.replace('Silvia','Silvya292'));

// Con Alt+z se formatean las líneas para mejor visión
let text="Tito no es mun mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles.";

// Reemplazar "los"
console.log(text.replace('los','cinco')); // Solo reemplaza la primera de las ocurrencias

// Para todas las ocurrencias se utiliza la expresión regular global /g
console.log(text.replace(/los/g, 'cinco'));