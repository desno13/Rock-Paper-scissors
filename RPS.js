function GetComputerChoice() {
    let choice =  Math.floor(Math.random() * 3);

    if (choice == 1){
        choice = 'rock';
        return choice;
    }
    if(choice == 2){
        choice = 'paper';
        return choice;
    }
    else {
        choice = 'scissors';
        return choice;
    }
}

function Playerselection (){
    let Player = prompt("Rock, Paper or Scissors?")
    Player.toLowerCase();
    return Player;

}

function Computerselection (){
    let Comp = GetComputerChoice()
    return Comp;
}

function round(Comp, Player){
    if (Comp == Player){
        console.log("Game tied")
        return
    }
    if (Player == 'rock'& Comp == 'scissors'){
        console.log('Winner Winner Chicken Dinner')
        return
    }
    if (Player == 'paper'& Comp == 'rock'){
        console.log('Winner Winner Chicken Dinner')
        return
    }
    if (Player == 'scissors'& Comp == 'paper'){
        console.log('Winner Winner Chicken Dinner')
        return
    }
    else{
        console.log('You lose. LOLOLOLOLOLOL')
        return
    }
}

let A = Playerselection();
let B = Computerselection();
round(B,A);