const read = require('readline-sync');

let val = +read.question("Saisir un nombre:");
let etoile = "";
for(let i = 1; i <= val; i++){
    if(i === 1){
        etoile = "*";
        console.log(`${etoile}`);
    }else{
        etoile += "*";
        console.log(`${etoile}`);
    }
    if(i == val){
        x = (i - 1);
        for(let y = x; y >= 1; y--){
            etoile = etoile.substring(0, etoile.length - 1);
            console.log(`${etoile}`);
        }
    }
}