const read = require('readline-sync');

let val1 = +read.question("Ecrire le premier nombre:");
let signe = read.question("quelle calcul voulez vous faire?");
let val2 = +read.question("Ecrire votre deuxième nombre:");
let resultat = eval(val1 + signe + val2);
console.log(`${resultat}`);