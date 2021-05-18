const read = require('readline-sync');

let val = +read.question("Saisir un nombre:");
let etoile = '';
for(let i= 0; i <= val; i++){
    if(i === 0){
        etoile = "*";
        console.log(`${etoile}`);
    }else{
        etoile += "*";
        console.log(`${etoile}`);
    }
}