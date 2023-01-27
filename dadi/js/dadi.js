








// // // // Gioco dei dadi

const startGameEl = document.getElementById("game-launch")

startGameEl.addEventListener(
    "click",
    function () {
        
        // Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
        const UserRandomNumber = Math.floor(Math.random() * 6) + 1;
        const pcRandomNumber = Math.floor(Math.random() * 6) + 1;
        
        
        
        // Stabilire il vincitore, in base a chi fa il punteggio più alto.
        if(UserRandomNumber > pcRandomNumber){
            const userWin = `ha vinto il giocatore`;
            document.getElementById(`userWin`).innerHTML = userWin;
    
        }
        else if (UserRandomNumber < pcRandomNumber){
        
            const pcWin = `ha vinto il computer`;
            document.getElementById(`pcWin`).innerHTML = pcWin;
        }
        else{
        
            const draw = `Pareggio`
            document.getElementById(`draw`).innerHTML = draw
        }
    }
)





