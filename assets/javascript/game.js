// Generate random target number between 19 - 120
// Generate random number for each crystal between 1 - 12
// Create onclick events for each crystal
// Create varibles for wins and losses
// Create win and loss conditions
// Tie crystals to box that holds total current score
// 

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
console.log(randomTargetNumber);
// Writes Target Score to HTML
$("#random-target-number").html(randomTargetNumber);

// Crystal value range
var minCrystalNumber = 1
var maxCrystalNumber = 12

// Random Crystal Values
var randomCrystalNumber1 = randomCrystalNumberFromRange(minCrystalNumber , maxCrystalNumber);
var randomCrystalNumber2 = randomCrystalNumberFromRange(minCrystalNumber , maxCrystalNumber);
var randomCrystalNumber3 = randomCrystalNumberFromRange(minCrystalNumber , maxCrystalNumber);
var randomCrystalNumber4 = randomCrystalNumberFromRange(minCrystalNumber , maxCrystalNumber);
function randomCrystalNumberFromRange(min, max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
console.log(randomCrystalNumber1);
console.log(randomCrystalNumber2);
console.log(randomCrystalNumber3);
console.log(randomCrystalNumber4);

// Assign to Crystals

// Crystal 1
$("#crystal1").click(function(randomCrystalNumberFromRange){
    $("#current-score").html(currScore += randomCrystalNumber1)
})

// Crystal 2
$("#crystal2").click(function(randomCrystalNumberFromRange){
    $("#current-score").html(currScore += randomCrystalNumber2)
})

// Crystalk 3
$("#crystal3").click(function(randomCrystalNumberFromRange){
    $("#current-score").html(currScore += randomCrystalNumber3)
})

// Crystal 4
$("#crystal4").click(function(randomCrystalNumberFromRange){
    $("#current-score").html(currScore += randomCrystalNumber4)
})