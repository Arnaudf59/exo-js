const read = require('readline-sync');

//exercice 5 while
var notes_eleves = [
    {'nb':1, "nom":"Paul", "note":2},
    {'nb':2, "nom":"Pierre", "note":6},
    {'nb':3, "nom":"Thomas", "note":11},
    {'nb':4, "nom":"Maud", "note":16},
    {'nb':5, "nom":"Arnaud", "note":20}
   ];
let i = 0;
while(notes_eleves[i]){
    if(notes_eleves[i]['note'] >= 0 && notes_eleves[i]['note'] <= 4){
        console.log(`${notes_eleves[i]['nom']} à une note de ${notes_eleves[i]['note']}, elle est comprise ente 0-4 --> "Catastrophique, il faut tout revoir"`);
    }else if(notes_eleves[i]['note'] >= 5 && notes_eleves[i]['note'] <= 10){
        console.log(`${notes_eleves[i]['nom']} à une note de ${notes_eleves[i]['note']}, elle est comprise ente 5-10 --> "Insuffisant"`);
    }else if(notes_eleves[i]['note'] >= 11 && notes_eleves[i]['note'] <= 14){
        console.log(`${notes_eleves[i]['nom']} à une note de ${notes_eleves[i]['note']}, elle est comprise ente 11-14 --> "Peut mieux faire"`);
    }else if(notes_eleves[i]['note'] >= 15 && notes_eleves[i]['note'] <= 17){
        console.log(`${notes_eleves[i]['nom']} à une note de ${notes_eleves[i]['note']}, elle est comprise ente 15-17 --> "Bien"`);
    }else if(notes_eleves[i]['note'] >= 18 && notes_eleves[i]['note'] <= 20){
        console.log(`${notes_eleves[i]['nom']} à une note de ${notes_eleves[i]['note']}, elle est comprise ente 18-20 --> "Excellent, bon travail"`);
    }else{
        console.log(`ERREUR`);
    }
    i++;
}

//exercice 5 for
var notes_eleves = [
    {'nb':1, "nom":"Paul", "note":2},
    {'nb':2, "nom":"Pierre", "note":6},
    {'nb':3, "nom":"Thomas", "note":11},
    {'nb':4, "nom":"Maud", "note":16},
    {'nb':5, "nom":"Arnaud", "note":20}
   ];
for(let i= 0; i < notes_eleves.length; i++)
{
    if(notes_eleves[i]['note'] >= 0 && notes_eleves[i]['note'] <= 4){
        console.log(`${notes_eleves[i]['nom']} à une note de ${notes_eleves[i]['note']}, elle est comprise ente 0-4 --> "Catastrophique, il faut tout revoir"`);
    }else if(notes_eleves[i]['note'] >= 5 && notes_eleves[i]['note'] <= 10){
        console.log(`${notes_eleves[i]['nom']} à une note de ${notes_eleves[i]['note']}, elle est comprise ente 5-10 --> "Insuffisant"`);
    }else if(notes_eleves[i]['note'] >= 11 && notes_eleves[i]['note'] <= 14){
        console.log(`${notes_eleves[i]['nom']} à une note de ${notes_eleves[i]['note']}, elle est comprise ente 11-14 --> "Peut mieux faire"`);
    }else if(notes_eleves[i]['note'] >= 15 && notes_eleves[i]['note'] <= 17){
        console.log(`${notes_eleves[i]['nom']} à une note de ${notes_eleves[i]['note']}, elle est comprise ente 15-17 --> "Bien"`);
    }else if(notes_eleves[i]['note'] >= 18 && notes_eleves[i]['note'] <= 20){
        console.log(`${notes_eleves[i]['nom']} à une note de ${notes_eleves[i]['note']}, elle est comprise ente 18-20 --> "Excellent, bon travail"`);
    }else{
        console.log(`ERREUR`);
    }
}

//exercice 5 read

let prenom = +read.question("nom de l'eleve:");
let note = +read.question("note de l'eleve:");
if(note >= 0 && note <= 4){
    console.log(`${prenom} à une note de ${note}, elle est comprise ente 0-4 --> "Catastrophique, il faut tout revoir"`);
}else if(note >= 5 && note <= 10){
    console.log(`${prenom} à une note de ${note}, elle est comprise ente 5-10 --> "Insuffisant"`);
}else if(note >= 11 && note <= 14){
    console.log(`${prenom} à une note de ${note}, elle est comprise ente 11-14 --> "Peut mieux faire"`);
}else if(note >= 15 && note <= 17){
    console.log(`${prenom} à une note de ${note}, elle est comprise ente 15-17 --> "Bien"`);
}else if(note >= 18 && note <= 20){
    console.log(`${prenom} à une note de ${note}, elle est comprise ente 18-20 --> "Excellent, bon travail"`);
}else{
    console.log(`ERREUR`);
}