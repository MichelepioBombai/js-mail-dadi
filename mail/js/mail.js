// Mail

const emailAutorizzate = [
    "utente1@esempio.com",
    "utente2@esempio.com",
    "utente3@esempio.com",
    "utente4@esempio.com",
    "utente5@esempio.com",
]


// Chiedi all'utente la sua email,
const userEmail = prompt("inserisci la tua email:")



let trovato = false;

// controlla che sia nella lista di chi può accedere,
for(let i = 0; i < emailAutorizzate.length; i++){
    
    if(userEmail == emailAutorizzate[i]){

        trovato = true
        
    }
    
}

// stampa un messaggio appropriato sull'esito del controllo.
if(trovato){

    console.log("accesso consentito");
    
} else{
    console.log("accesso negato: email non autorizzata");
}

