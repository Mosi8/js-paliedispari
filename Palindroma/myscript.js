// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let parola = prompt('Scrivi una parola e scopri se è palindroma');


function palindromo(controllo){
    let numParola = 0;
    let numReverse = controllo.length -1;
    for (i=0; i < controllo.length; i++){
        if (controllo[numParola] == controllo[numReverse]){
            numParola++;
            numReverse--;
        }else{
            return false;
        }
    }
    return true;
}


if (palindromo(parola)){
    console.log('Palindromo');
}else{
    console.log('Non Palindromo');
}

