// Gamestate
var gameOver = false

// Score
var currScore = 0
var wins = 0
var losses = 0

// Random Target Score
var minNumber = 19
var maxNumber = 120
var randomTargetNumber = randomTargetNumberFromRange(minNumber , maxNumber);
function randomTargetNumberFromRange(min, max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

// Writes Target Score to HTML
$("#random-target-number").html(randomTargetNumber);

// Crystal value range
var minCrystalNumber = 1
var maxCrystalNumber = 12

// Random Crystal Values
var randomCrystalNumber1;
var randomCrystalNumber2;
var randomCrystalNumber3;
var randomCrystalNumber4;
SetCrystalValues();

function SetCrystalValues() {
    randomCrystalNumber1 = randomCrystalNumberFromRange(minCrystalNumber , maxCrystalNumber);
    randomCrystalNumber2 = randomCrystalNumberFromRange(minCrystalNumber , maxCrystalNumber);
    randomCrystalNumber3 = randomCrystalNumberFromRange(minCrystalNumber , maxCrystalNumber);
    randomCrystalNumber4 = randomCrystalNumberFromRange(minCrystalNumber , maxCrystalNumber);

    function randomCrystalNumberFromRange(min, max)
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    console.log("Crystal1: " + randomCrystalNumber1);
    console.log("Crystal2: " + randomCrystalNumber2);
    console.log("Crystal3: " + randomCrystalNumber3);
    console.log("Crystal4: " + randomCrystalNumber4);
}

// Assign to Crystals

// Crystal 1
$("#crystal1").click(function(randomCrystalNumberFromRange){
    $("#current-score").html(currScore += randomCrystalNumber1)
    Gamestate()
})

// Crystal 2
$("#crystal2").click(function(randomCrystalNumberFromRange){
    $("#current-score").html(currScore += randomCrystalNumber2)
    Gamestate()
})

// Crystal 3
$("#crystal3").click(function(randomCrystalNumberFromRange){
    $("#current-score").html(currScore += randomCrystalNumber3)
    Gamestate()
})

// Crystal 4
$("#crystal4").click(function(randomCrystalNumberFromRange){
    $("#current-score").html(currScore += randomCrystalNumber4)
    Gamestate()
})

// Win/Loss conditions
function Gamestate() {
    // Win/Lose
    if (currScore == randomTargetNumber){
        gameOver = true;
        wins++;
        alert("You win! Play again?")
    } else if (currScore > randomTargetNumber){
        gameOver = true;
        losses++; 
        alert("Almost! Try again?")  
    }

    // Reset everything
    if (gameOver) {
        currScore = 0
        randomTargetNumber = randomTargetNumberFromRange(minNumber , maxNumber)
        
        // Update win/loss
        $("#wins").html("Wins: " + wins)
        $("#losses").html("Losses: " + losses)
        $("#random-target-number").html(randomTargetNumber)
        $("#current-score").html(currScore)
        console.log("---------")
        SetCrystalValues()
        gameOver = false;
    }
}

