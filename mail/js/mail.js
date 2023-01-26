// Mail
// stampa un messaggio appropriato sull'esito del controllo.

// Chiedi all'utente la sua email,
const userEmail = prompt("inserisci la tua email:")


// controlla che sia nella lista di chi può accedere,
const emailAutorizzate = [
    "utente1@esempio.com",
    "utente2@esempio.com",
    "utente3@esempio.com",
    "utente4@esempio.com",
    "utente5@esempio.com",
]

let trovato = false;

for(let i = 0; i < emailAutorizzate.lenght; i++){

    if(userEmail == emailAutorizzate[i]){
        console.log("accesso consentito");
        trovato = true;
    }

    if(!trovato) {
        console.log("accesso negato: email non autorizzata")
    }




}


