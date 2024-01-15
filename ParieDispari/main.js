// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let buttonPari= document.getElementById("btnP")
let buttonDispari= document.getElementById("btnD")
let somma= 0



buttonDispari.addEventListener("click", function(){
    let numeroGiocatore= parseInt(prompt("scegli un numero da 1 a 5"))
    let numeroRandom= Random(1, 5)
    somma= numeroGiocatore + numeroRandom
    Dispari()
    
    
    console.log(`il tuo numero é ${numeroGiocatore}`)
    console.log(`il numero avversario é ${numeroRandom}`)
    console.log(`la somma è ${somma}`)

})

buttonPari.addEventListener("click", function(){
    let numeroGiocatore= parseInt(prompt("scegli un numero da 1 a 5"))
    let numeroRandom= Random(1, 5)
    somma= numeroGiocatore + numeroRandom
    Pari()
    
    
    console.log(`il tuo numero é ${numeroGiocatore}`)
    console.log(`il numero avversario é ${numeroRandom}`)
    console.log(`la somma è ${somma}`)
    
})


function Random(min, max) {
    return Math.floor(Math.random() * max) + min;
  }


function Dispari(){
    if(somma % 2 == 0){
        console.log("hai perso")
    }else 
    console.log("hai vinto")
}

function Pari(){
    if(somma % 2 == 0){
        console.log("hai vinto")
    }else 
    console.log("hai perso")
}

