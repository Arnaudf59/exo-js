const read = require('readline-sync');

let val = +read.question("Saisir un nombre:");
let valresult = 0;
let val_ecrite = "";
for(let i= 1; i <= val; i++){
    valresult = valresult + i;
    if(i === 1){
        val_ecrite =  i;
    }else{
        val_ecrite = val_ecrite + " + " + i;
    }
}
console.log(`${val_ecrite} = ${valresult}`);