// Casos específicos: break-continue
let lista=[1,2,3,4,5,6,7,8];

for(let i=0;i<lista.length;i++){
    
    if(lista[i]==3){
        continue;
    }

    console.log(lista[i]);

    if(lista[i]>5){
        break;
    }

}

// Ámbito del bucle
for(let i=0;i<5;i++){
    console.log(i);
}
// console.log(i); No está definida

for(var j=0;j<5;j++){
    console.log(j);
}
console.log(j);

for(let a=0;a<5;a++){
    console.log(a);
    const b=1;
    console.log(b);
}
// console.log(b); Tampoco está definida, porque const está dentro del bucle