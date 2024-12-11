/* Descrizione: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. 
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri 
che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da 
indovinare sono stati individuati. */

// DOM Elements 

const displayElm = document.getElementById ('display');

// Variables

let seconds = 5;

//MAIN

const idInterval = setInterval (()=>{

    if (seconds === 0) {
        clearInterval(idInterval);
        displayElm.innerHTML = 'GO!'
    } else {
        displayElm.innerHTML = seconds;
        seconds --;
    }

}, 1000);