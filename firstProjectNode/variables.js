var variableVar_;
let variabeLet_;

//Const
const constante="Soy una constante";
console.log(constante);
//constante="Adiós"; -> Error

//Var
var a=1;
console.log(a);
a=4;
console.log(a);

//Let
let b=3;
console.log(b);
b=5;
console.log(b);

//Diferencias var/let
var variable="Variable";
for(var i=0;i<3;i++){
    var variable="Segunda variable";
}
console.log(variable);

let variableLet="Variable";
for(var i=0;i<3;i++){
    let variableLet="Segunda variable";
}
console.log(variableLet);

//Typeof
console.log(typeof 1);
console.log(typeof "1");
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof variable);
console.log(typeof variableLet);
console.log(typeof variabeLet_);

var num=4;
console.log(typeof num);
num="Hola";
console.log(typeof num);