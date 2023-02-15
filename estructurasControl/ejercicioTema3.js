// Ejercicio tema 3
// Factorial for
let fact1=1;
for(let i=10;i>0;i--){
    fact1=fact1*i;
}
console.log(fact1);

// Factorial while
let fact2=1;
let j=10;
while(j>0){
    fact2=fact2*j;
    j--;
}
console.log(fact2);

// Factorial while con if y break
let fact3=1;
let k=10;
while(true){
    fact3=fact3*k;
    k--;
    if(fact3==3628800){
        break;
    }
}
console.log(fact3);