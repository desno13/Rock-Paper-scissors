
function GetComputerChoice() {
    let choice =  Math.floor(Math.random() * 3);

    if (choice == 1){
        choice = 'rock';
        div.textContent = 'Computer chooses rock';
        div.style.display = "flex";
        div.style.alignContent = "center";
        div.style.justifyContent = "center";
        console.log("Comp choice is r")
        return choice;
    }
    if(choice == 2){
        choice = 'paper';
        div.textContent = 'Computer chooses paper';
        div.style.display = "flex";
        div.style.alignContent = "center";
        div.style.justifyContent = "center";
        console.log("Comp choice is p")
        return choice;
    }
    else {
        choice = 'scissors';
        div.textContent = 'Computer chooses scissors';
        div.style.display = "flex";
        div.style.alignContent = "center";
        div.style.justifyContent = "center";
        console.log("Comp choice is s")
        return choice;
    }
}

function GetP(id){
    if(id=="r"){
        console.log("rock")
        return "rock"
    }
}

function Playerselection (){
const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      Computerselection(button.id);
    });
  })
}

function Computerselection (id){
    let Comp = GetComputerChoice()
    let A = round(Comp, id);
    return A;
}

function round(Comp, Player){
    console.log(Player)
    if (Comp == Player){
        win.textContent = 'Game tied';
        win.style.display = "flex";
        win.style.alignContent = "center";
        win.style.justifyContent = "center";
        console.log("Game tied")
        carry(0);
        return;  
    }
    if (Player == 'rock'& Comp == 'scissors'){
        win.textContent = 'Winner Winner Chicken Dinner';
        win.style.display = "flex";
        win.style.alignContent = "center";
        win.style.justifyContent = "center";
        console.log('Winner Winner Chicken Dinner')
        carry(1);
        return; 
    }
    if (Player == 'paper'& Comp == 'rock'){
        win.textContent = 'Winner Winner Chicken Dinner';
        win.style.display = "flex";
        win.style.alignContent = "center";
        win.style.justifyContent = "center";
        console.log('Winner Winner Chicken Dinner')
        carry(1);
        return; 
    }
    if (Player == 'scissors'& Comp == 'paper'){
        win.textContent = 'Winner Winner Chicken Dinner';
        win.style.display = "flex";
        win.style.alignContent = "center";
        win.style.justifyContent = "center";
        console.log('Winner Winner Chicken Dinner')
        carry(1);
        return;
    }
    else{
        win.textContent = 'You lose';
        win.style.display = "flex";
        win.style.alignContent = "center";
        win.style.justifyContent = "center";
        console.log('You lose. LOLOLOLOLOLOL')
        carry(2);
        return;
    }
}

function carry(roll){

    if(roll == 0 ){
        score.textContent = 'Computer = '+initialC +' Player = ' + (initialP);
        score.style.display = "flex";
        score.style.alignContent = "center";
        score.style.justifyContent = "center";
    }
    if (roll == 1){
        initialP++
        score.textContent = 'Computer = '+initialC +' Player = ' + (initialP);
        score.style.display = "flex";
        score.style.alignContent = "center";
        score.style.justifyContent = "center";
    }
    if (roll == 2){
        initialC++;
        score.textContent = 'Computer = '+initialC +' Player = ' + (initialP);
        score.style.display = "flex";
        score.style.alignContent = "center";
        score.style.justifyContent = "center";
    }



}

const container = document.querySelector('#container')
container.style.display= "flex";
container.style.alignContent = "center";
container.style.justifyContent = "center";

const h = document.querySelector('h')
h.style.display= "flex";
h.style.alignContent = "center";
h.style.justifyContent = "center";

const result = document.querySelector('#result')
const div = document.createElement("div");
div.classList.add('div')
result.appendChild(div);

let initialP = 0;
let initialC = 0;
const body = document.querySelector('body')
const win = document.createElement("div");
const score = document.createElement("div");
score.classList.add('div')
win.classList.add('div')
body.appendChild(win);
body.appendChild(score)


let choice = Playerselection ();