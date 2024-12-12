/* Descrizione: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. 
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri 
che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da 
indovinare sono stati individuati. */

// DOM Elements
const formGame = document.getElementById('form-game');
const displayElm = document.getElementById('display');
const colNumber = document.getElementById('col-Number');
const btnConfirm = document.getElementById('btn-conferma');
const btnCancel = document.getElementById('btn-annulla');

// Variables
let seconds = 5;
let timerRunning = true;

// Funzione per generare numeri casuali tra 10 e 50
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per generare e mostrare i numeri casuali negli input
function generateNumbers() {
    // Selezioniamo tutti gli input
    const inputs = document.querySelectorAll('#col-Number input');

    // Per ogni input, generiamo un numero casuale tra 10 e 50
    inputs.forEach(input => {
        const randomNumber = getRndInteger(10, 50); 
        input.value = randomNumber; 
    });

}

// Countdown timer
const idInterval = setInterval(() => {
    if (seconds === 0) {
        clearInterval(idInterval);
        displayElm.innerHTML = 'GO!';
        generateNumbers(); 
        setTimeout(() => {
           
            displayElm.innerHTML = '';
            colNumber.style.display = 'block'; 
        }, 2000);
    } else {
        displayElm.innerHTML = seconds;
        seconds--;
    }
}, 1000);

// Funzione che gestisce l'evento di submit
formGame.addEventListener('submit', function(event) {
    event.preventDefault(); 
});
