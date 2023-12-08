////////////////////////declarez, modifiez des variables////////////////////////

const monPrenom = "Yavuzhan";
let monAge = 25
console.log(monPrenom, monAge);

let billetsEntrees = 1000
billetsEntrees += 5000
console.log(billetsEntrees);

let punchline = "Mon nom est yavuzhan"
punchline += ", YOLDASER."
console.log(punchline);

let chiffre = 10
chiffre += 15
console.log(chiffre);



let totalLivres = 500
totalLivres += 50
totalLivres -= 10
totalLivres += 5
console.log(totalLivres);


let affichageTotalLivres = "Notre bibli possède "
affichageTotalLivres += totalLivres
affichageTotalLivres += " livres."

console.log(affichageTotalLivres);

//////////////////////////////structurez des données grâces aux objects///////////////////

let monPersonnage = {
    nom: "Yoldaser",
    prenom:"Yavuzhan",
    age:25,
    couleurPreferer:"vert",
    hobbies: "chichas"
}

console.log(monPersonnage.couleurPreferer)


const ticket = {
    nomFilm: "XNXXYvuz",
    prix: 499,
    numeroSalle: 2
}
ticket.id = "Yavuzhan"

//Bonjour NOM, votre film NOMDEFILM est en salle NUMERODELASALLE

let textAffichage = "Bonjour " + ticket.id + " votre film " + ticket.nomFilm + " est en salle " + ticket.numeroSalle
console.log(textAffichage);


//////////////////////////////regrouper des données graces aux tableaux///////////////////

let playlist = ["a kind of magic", "We are the champion", "the escort"]

playlist.push("men in black")
playlist.push("the savery")

playlist.pop()

console.log(playlist)

///////////////////////////////////////////controler du code grace aux conditions//////////////////////////////////:
/*

const listeMots = ["Cachalot",  "Petunia", "Serviette"]
let score = 0
let motUtilisateur = prompt("Entrez le mot : " + listeMots[0]) 

if (motUtilisateur === listeMots[0]) {
    score++
}

 motUtilisateur = prompt("Entrez le mot : " + listeMots[1]) 

if (motUtilisateur === listeMots[1]) {
    score++
}

 motUtilisateur = prompt("Entrez le mot : " + listeMots[2]) 

if (motUtilisateur === listeMots[2]) {
    score++
}

console.log(score);



let mot = prompt("Ecrivez ok")

while (mot !== "ok") {
    mot = prompt("ecrivez ok")
}

console.log("Vous avez ecrit ok !");




///////////////////////////////////Organisez votre code grace aux fonction////////////////////////////


function retournerMessageScore(score, nombreMotMax) {
    let message = 'Votre score est de ' + score + ' sur ' + nombreMotMax
return message
}

let retourFonction = retournerMessageScore(1, 3)
console.log(retourFonction);

/////////

function noteEvaluation(note, noteMax) {
    let message = "Votre note est de " + note + " sur " + noteMax
    return message
}

let returnNote = noteEvaluation(14, 20)
console.log(returnNote);

//exo

let monNombre = 1
// monNombre est une variable globale, car elle est déclarée en dehors d’un bloc de code

function afficheUnNombre() {
    let monNombreLocal = 2
   // monNombreLocal est une variable locale, car déclarée uniquement au sein d’une fonction
    console.log("Intérieur de la fonction : ")
    console.log(monNombre) // monNombre est accessible
    console.log(monNombreLocal) // monNombreLocal est accessible
}


 afficheUnNombre()
console.log("Extérieur de la fonction : ")
console.log(monNombre) // monNombre est accessible
console.log(monNombreLocal) // monNombreLocal n’est pas accesssible

let motUtilisateur;

//cette varaible va contenir le score de l'utilisateur, il commence a zero.
let score = 0;

//tant que l'utilisateur n'a pas choisis "mot" ou "phrases", on lui redemande
let choix = prompt('Voulez-vous jouer avec les mots (entrez "mots") ou les phrases (entrez "phrases"?')
while (choix !== 'mots' && choix !== 'phrases') {
    choix = prompt('Vous devez choisir enter "mots" et "phrases"')
}

//si l'utilisateur a choisi "mots", on lui demande de taper les mots de la liste
if (choix === 'mots') {
    for (let i=0; i < listeMots.length; i++) {
        motUtilisateur = prompt('Entrez le mot : ' + listeMots[i])
        if (motUtilisateur === listePhrases[i]) {
            score++
        }
    }
//si l'utilisateur a choisi "phrases", on lui demande de taper les phrases de la liste 
} else {
    for (let i= 0; i < listePhrases.length; i++) {
        motUtilisateur = prompt('Entrez la phrase : ' + listePhrases[i])
        if (motUtilisateur === listePhrases[i]) {
            score++
        }
    }
}

//on affiche le score de l'utilisateur
console.log('Votre score est de ' + score + ' sur ' + listeMots.length);

*/





let compteur = 0 
while (compteur < 5) {
    compteur++
}
console.log(compteur);

for (let i = 0 ; i > 5; i++) {
console.log("la serviette chaude dans mon cul");
}

let baliseZonePropositionSpan = document.querySelector("zoneProposition span");
console.log(baliseZonePropositionSpan)

///////