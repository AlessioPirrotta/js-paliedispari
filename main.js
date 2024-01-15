// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let parola= prompt("scrivi una parola")
let risultato = document.getElementById("rs")
let buttonA= document.getElementById("btn")
Palindrom(parola)



function Palindrom (par){
    let arrayParola = Array.from(parola)
    
    let arrayInvertito = [];

for (let i = arrayParola.length - 1; i >= 0; i--) {
    arrayInvertito.push(arrayParola[i]);
}
    console.log(arrayParola)
    console.log(arrayInvertito)

   for(let i= 0; i < arrayParola.length; i++){
     if(arrayParola[i] !== arrayInvertito[i]){
        risultato.innerHTML=`La parola"${parola}"non è palindroma`
    return
     }
     else (arrayParola[i] === arrayInvertito[i])
     risultato.innerHTML=`La parola"${parola}" è palindroma`
     return
   }
}

buttonA.addEventListener("click", function(){
    location.reload()

})


