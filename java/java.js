var rockButton = document.getElementById("Rock") //pulls from "rock" id in html
var paperButton = document.getElementById("Paper") //pulls from "paper" id in html
var scissorButton = document.getElementById("Scissors") //pulls from "scissors" id in html

var arr = ["Rock", "Paper", "Scissors"] //Array for computer choice.
var tally = { tie: 0, wins: 0, losses: 0 }

rockButton.addEventListener("click", function(){ 
    winner("Rock")
})

paperButton.addEventListener("click", function(){
    winner("Paper")
})

scissorButton.addEventListener("click", function(){
    winner("Scissors")
})

function winner(playerChoice){ //playerChoice is defined by lines 8-18
    var computerChoice = arr[Math.floor(Math.random()*arr.length)];

    switch (playerChoice){
        case "Rock":
            switch (computerChoice) {
                case "Rock":
                tally.tie++
                console.log("Tie")
                break;
                case "Paper":
                tally.wins++
                console.log("Winner")
                break;
                case "Scissors":
                tally.losses++
                console.log("Loser")
                break;
            }

        document.getElementById("playerChose").innerHTML = "You chose: " + playerChoice;
        document.getElementById("computerChose").innerHTML = "Computer chose: " + computerChoice;
        document.getElementById("Wins").innerHTML = "Wins: " + tally.wins;
        document.getElementById("Losses").innerHTML = "Losses: " + tally.losses;
        document.getElementById("Ties").innerHTML = "Ties: " + tally.tie;
        break;

        case "Paper":
             switch (computerChoice) {
                case "Rock":
                tally.losses++
                console.log("Loser")
                break;
                case "Paper":
                tally.tie++
                console.log("Tie")
                break;
                case "Scissors":
                tally.wins++
                console.log("Winner")
                break;
             }
        
        document.getElementById("playerChose").innerHTML = "You chose: " + playerChoice;
        document.getElementById("computerChose").innerHTML = "Computer chose: " + computerChoice;
        document.getElementById("Wins").innerHTML = "Wins: " + tally.wins;
        document.getElementById("Losses").innerHTML = "Losses: " + tally.losses;
        document.getElementById("Ties").innerHTML = "Ties: " + tally.tie;
        break;

        case "Scissors":
            switch (computerChoice) {
                case "Rock":
                tally.wins++
                console.log("Winner")
                break;
                case "Paper":
                tally.losses++
                console.log("Loser")
                break;
                case "Scissors":
                tally.tie++
                console.log("Tie")
                break;
            }

        document.getElementById("playerChose").innerHTML = "You chose: " + playerChoice;
        document.getElementById("computerChose").innerHTML = "Computer chose: " + computerChoice;
        document.getElementById("Wins").innerHTML = "Wins: " + tally.wins;
        document.getElementById("Losses").innerHTML = "Losses: " + tally.losses;
        document.getElementById("Ties").innerHTML = "Ties: " + tally.tie;
        break;    
    }  
    } 
    
    //create variable to grab random element from computerChoice array - DONE
    //switch (in ruby, a case statement) comparing the aforementioned variable to the playerChoice
    //and then, a) console.log the winner
    // or b) print to screen using document.getElementById("tellMeSomething")
