let userscore = 0;
let compscore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorep=document.querySelector("#user-score");
let compScorep=document.querySelector("#comp-score");


const gencomchoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return option[randidx];
}
const drawgame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game was Draw.Play Again!";
   msg.style.backgroundColor="black" ;
}
const showwinner = (userwin ,userchoice,compchoice) => {
    if (userwin) {
        userscore++;
        userScorep.innerText=userscore;
        // console.log("you win");
        msg.innerText = `you winner!  your ${userchoice} beats  ${compchoice}`;
        msg.style.backgroundColor="green";
    } else {
        compscore++;
        compScorep.innerText=compscore;
        // console.log("computer win");
        msg.innerText = `you lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame = (userchoice) => {
    console.log("userchoice", userchoice);
    //to generate computer choice
    const compchoice = gencomchoice();
    // console.log("computer choice =", compchoice);
    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }

        showwinner(userwin,userchoice,compchoice);

    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);

    });
});