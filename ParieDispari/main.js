// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let buttonPari= document.getElementById("btnP")
let buttonDispari= document.getElementById("btnD")
let numero1= document.getElementById("nm1")
let numero2= document.getElementById("nm2")
let sum= document.getElementById("sm")
let risultato= document.getElementById("rst")
let somma= 0



buttonDispari.addEventListener("click", function(){
    let numeroGiocatore= parseInt(prompt("scegli un numero da 1 a 5"))
    let numeroRandom= Random(1, 5)
    somma= numeroGiocatore + numeroRandom
    Dispari()
    
    
    numero1.innerHTML= `${numeroGiocatore}`
    numero2.innerHTML= `${numeroRandom}`
    sum.innerHTML= `${somma}`

})

buttonPari.addEventListener("click", function(){
    let numeroGiocatore= parseInt(prompt("scegli un numero da 1 a 5"))
    let numeroRandom= Random(1, 5)
    somma= numeroGiocatore + numeroRandom
    Pari()
    
    
    numero1.innerHTML= `${numeroGiocatore}`
    numero2.innerHTML= `${numeroRandom}`
    sum.innerHTML= `${somma}`
    
})


function Random(min, max) {
    return Math.floor(Math.random() * max) + min;
  }


function Dispari(){
    if(somma % 2 == 0){
        risultato.innerHTML= "Hai perso"
        console.log("hai perso")
    }else 
    risultato.innerHTML= "Hai vinto"
    console.log("hai vinto")
}

function Pari(){
    if(somma % 2 == 0){
        risultato.innerHTML= "Hai vinto"
        console.log("hai vinto")
    }else 
    risultato.innerHTML= "Hai perso"
    console.log("hai perso")
}

