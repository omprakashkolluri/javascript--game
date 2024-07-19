let userscore = 0;
let systemscore = 0;
let userscorepara = document.querySelector("#user-score");
let systemscorepara = document.querySelector("#system-score")
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const drawGame= () =>{
   
    msg.innerText = " game is draw, Play again."
    msg.style.backgroundColor = "#081b31" ;
}

const gensystemchoice = () =>{
    const options = ["rock","paper","scissors"]
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const playgame = (userChoice) =>{
     
    const  sysChoice = gensystemchoice();
    
const showWinner = (userWin,userChoice,sysChoice) => {
    if(userWin){
       
        userscore++;
        userscorepara.innerText = userscore; 
        msg.innerText = `You Win !!, your ${userChoice} beats ${sysChoice}.`
        msg.style.backgroundColor = "green" ;

    }else {
        systemscore++;
        systemscorepara.innerText = systemscore;
        msg.innerText = `You lose, ${sysChoice} beats your ${userChoice}.`
        msg.style.backgroundColor = "red" ;

    }
}

    if( userChoice === sysChoice){
        drawGame();
    }else {
        let userWin = true;
        if (userChoice === "rock"){
            userWin = sysChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            userWin = sysChoice === "scissors" ? false : true;
        } else  {
            userWin = sysChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,sysChoice);
    } 

};

choices.forEach((choice) => {
    choice.addEventListener("click",  () =>{
        const userChoice= choice.getAttribute("id");
       playgame(userChoice);
    })
})