// Mail

const emailAutorizzate = [
    "utente1@esempio.com",
    "utente2@esempio.com",
    "utente3@esempio.com",
    "utente4@esempio.com",
    "utente5@esempio.com",
]


// Chiedi all'utente la sua email,

const sendButton = document.getElementById("sendEmail")




sendButton.addEventListener(
    "click",
    function (){
        
        
        
        const userEmail = document.getElementById("email").value
        
        
        let trovato = false;

        // controlla che sia nella lista di chi può accedere,


        for(let i = 0; i < emailAutorizzate.length; i++){
            
            if (userEmail == emailAutorizzate[i]){
        
                trovato = true
                
            }
            
        }
        
        // stampa un messaggio appropriato sull'esito del controllo.
        if(trovato){

            document.getElementById("allowed").innerHTML = (`accesso autorizzato:Benvenuto/a ${userEmail}`)
        
            // console.log("accesso consentito");
            
        } else{

            document.getElementById("notAllowed").innerHTML = ("accesso negato: email non autorizzata")

            // console.log("accesso negato: email non autorizzata");
        }

    }
)

