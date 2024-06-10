function playRound() {

    let humanScore = 0
    let computerScore = 0

    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()
    
    if (humanSelection === computerSelection) {console.log("Draw, try again!")}
    else if (humanSelection === "Rock" && computerSelection === "Scissors") {console.log ("Player wins!"), humanScore ++}
    else if (humanSelection === "Paper" && computerSelection === "Rock") {console.log ("Player wins!"), humanScore ++}
    else if (humanSelection === "Scissors" && computerSelection === "Paper") {console.log ("Player wins!"), humanScore ++}
    else if (computerSelection === "Rock" && humanSelection === "Scissors") {console.log ("Computer wins!"), computerScore ++}
    else if (computerSelection === "Paper" && humanSelection === "Rock") {console.log ("Computer wins!"), computerScore ++}
    else if (computerSelection === "Scissors" && humanSelection === "Paper") {console.log ("Computer wins!"), computerScore ++}
    
    console.log("Your score is " + humanScore + ", Computer's score is " + computerScore)
    
}


function getComputerChoice() {
        var randomNumber = Math.floor((Math.random()*3)+1)
        if (randomNumber === 1) {var randomComputerChoice = "Scissors"} 
        else if (randomNumber === 2) {var randomComputerChoice = "Paper"} 
        else if (randomNumber === 3) {var randomComputerChoice = "Rock"}
        return randomComputerChoice
        }
        
        function getHumanChoice() {
            var randomPlayerChoice = prompt("What is your selection? (Scissors, Paper, Rock)")
            return randomPlayerChoice.charAt(0).toUpperCase() + randomPlayerChoice.slice(1).toLowerCase();
            }




