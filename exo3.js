const read = require('readline-sync');

let prix_utilisateur = 15;
let prix_fabrication = 20;
console.log("Veuillez saisir le prix de fabrication:");
console.log(prix_fabrication);
console.log("Veuillez saisir le prix de l'utilisateur:");
console.log(prix_utilisateur);
let difference = prix_utilisateur - prix_fabrication;
if(Math.sign(difference)> 0){
    console.log(`Profit de ${difference}€`);
}else if(difference === 0){
    console.log(`Vous ne gagnez pas d'argent`);
}else{
    console.log(`Perte de ${Math.abs(difference)}€`);
}