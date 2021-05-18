const read = require('readline-sync');

let val = +read.question("Saisir une somme:");
console.log(`La somme est ${val}€`);
let prix = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
for(let i= 0; i < prix.length; i++){
    let reste = val % prix[i];
    let count = (val - reste)/prix[i];
    if(prix[i] >= 5 && count > 0){
        console.log(`Billet ${prix[i]}€ : ${count}`);
    }else if(prix[i] < 5 && count > 0) {
        console.log(`Piece ${prix[i]}€ : ${count}`);
    }
    arrondi = reste*100;          
    arrondi = Math.round(arrondi);
    val = arrondi/100;
}