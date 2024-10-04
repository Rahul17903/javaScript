let userscore = 0;
let comScore = 0;
let result = document.getElementById("result")
const choise = document.querySelectorAll(".images")

const users = document.getElementById("youscore")
const comps = document.getElementById("comscore")


const drawGame = ()=>{
    result.innerText = "game was draw"
    result.style.background = "#89a609"
}

const genCompChoice =()=>{
    let arr = ["rock","paper","scissors"]
    let random = Math.floor(Math.random()*3)
    return arr[random]
}

const showWinner = (userWin,userchoice,compChoice)=>{
    if(userWin){
        userscore++;
        users.innerText = userscore
        result.innerText = `you win ${userchoice} beats ${compChoice}`
        result.style.background = "green"
    }else{
        comScore++;
        comps.innerText = comScore
        result.innerText = `you loss ${userchoice} beats ${compChoice}`
        result.style.background = "red"
    }
}


const playGame = (userchoice) => {
    const compChoice = genCompChoice();
    if(userchoice == compChoice){
        drawGame()
    }
    else{
        let userWin = true;
        if(userchoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userWin = compChoice === "scissors" ? false : true
        }
        else{
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin,userchoice,compChoice);
    }
}

choise.forEach((choise)=>{
    choise.addEventListener("click",()=>{
       const userchoice = choise.getAttribute("id")
       playGame(userchoice)
    })
})

