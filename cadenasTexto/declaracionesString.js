// Cadenas de caracteres
let str_dbl="Texto con comillas dobles";
console.log(str_dbl);

let str_sng='Texto con comillas simples';
console.log(str_sng);

let str_comillas_dbl="Literal \"aprendiendo JS\"";
console.log(str_comillas_dbl);

let str_comillas_sng='Literal "aprendiendo JS"';
console.log(str_comillas_sng);

let str_comillas="Literal 'aprendiendo JS'";
console.log(str_comillas);

let str_comillas2='Literal \'aprendiendo JS\'';
console.log(str_comillas2);

// Comillas invertidas o backticks: Permiten introducir variables dentro del string y saltos de línea
let str_bs=`String con comillas invertidas`;
console.log(str_bs);

let nombre="Silvia";
let saludo=`Hola, ${nombre}`;
console.log(saludo);

// Plantillas HTML
let plantilla = `
<html>
    <h1>Página web de ${nombre}</h1>
    <p>Párrafo</p>
</html>`;
console.log(plantilla);