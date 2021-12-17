// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let element = document.getElementById("bottone");
let pariDispari = document.getElementById("PariDispari");
let somma = 0;


function numRandom() {
    let numeroRandom = parseInt(Math.floor(Math.random()*5 + 1));
    return numeroRandom;
}

function DisPari() {
    let segno = "dispari";
    if(somma %2 == 0){
        segno = "pari";
    }
    return segno;
}

element.addEventListener('click',
function () {
    let segnoUser = pariDispari.options[pariDispari.selectedIndex].value;
    let numeroUser = parseInt(prompt('Inserisci un numero da 1 a 5'));
    let numeroPc = numRandom();
    somma = numeroUser + numeroPc;

    document.writeln("<div>Il tuo pronostico della somma: " + segnoUser + "</div>");
    document.writeln("<div>Numero scelto da te: " + numeroUser + "</div>");
    document.writeln("<div>Numero Pc: " + numeroPc + "</div>");
    
    let segnoRisultato = DisPari();


    document.writeln("Risultato della somma è  " + somma + " quindi è " + segnoRisultato + "</div>");

    if (segnoUser == segnoRisultato) {
        document.writeln('<div>Hai indovinato</div>')
    }else{
        document.writeln('<div>Hai sbagliato</div>')
    }

});
