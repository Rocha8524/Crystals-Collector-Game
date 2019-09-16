// Make function available after the document is loaded.
jQuery.noConflict()(function ($) {
$(document).ready(function() {

// Set up varaiables for the game score and wins/losses tallies
var userWins = 0;
// $("#user-wins").text("Wins: " + userWins);

var userLosses = 0;
// $("#user-losses").text("Losses: " + userLosses);

var userScore = 0;
    $("#your-score").text("Your Score: " + userScore)

var totalScore = Math.floor(Math.random() * 111) + 19;
    $("#target-score").text("Target Score: " + totalScore);

// Set up crystal variables
var greenGem = Math.floor(Math.random() * 12) + 1;
var yellowGem = Math.floor(Math.random() * 12) +1;
var blueGem = Math.floor(Math.random() * 12) + 1;
var purpleGem = Math.floor(Math.random() * 12) + 1;


// Reset game scores and emerald values after each win and loss
function resetGame () {
    userScore = 0;
    $("#your-score").text("Your Score: " + userScore)
    totalScore = Math.floor(Math.random() * 111) + 19;
    $("#target-score").text("Target Score: " + totalScore);
    blueGem = Math.floor(Math.random() * 12) + 1;
    greenGem = Math.floor(Math.random() * 12) + 1;
    yellowGem = Math.floor(Math.random() * 12) + 1;
    purpleGem = Math.floor(Math.random() * 12) + 1;
}

// Emerald click functions and values for each game
$("#blue-emerald").click(function() {
    userScore = blueGem + userScore;
    $("#your-score").text("Your Total Score Is: " + userScore);
    
    if (userScore == totalScore) {
        userWins = userWins + 1;
        $("#user-wins").text("Wins: " + userWins);
        resetGame();
    }   
    if (userScore > totalScore)   {
        userLosses = userLosses + 1;
        $("#user-losses").text("Losses: " + userLosses);
        resetGame();
    }
});   

$("#green-emerald").click(function() {
    userScore = greenGem + userScore;
    $("#your-score").text("Your Total Score Is: " + userScore);
        
    if (userScore == totalScore) {
        userWins = userWins + 1;
        $("#user-wins").text("Wins: " + userWins);
        resetGame();

}   if (userScore > totalScore)   {
        userLosses = userLosses + 1;
        $("#user-losses").text("Losses: " + userLosses);
        resetGame();
    }
});  

$("#yellow-emerald").click(function() {
    userScore = yellowGem + userScore;
    $("#your-score").text("Your Total Score Is: " + userScore);
            
    if (userScore == totalScore) {
        userWins = userWins + 1;
        $("#user-wins").text("Wins: " + userWins);
        resetGame();
    
}   if (userScore > totalScore)   {
        userLosses = userLosses + 1;
        $("#user-losses").text("Losses: " + userLosses);
        resetGame();
    }
});     

$("#purple-emerald").click(function() {
    userScore = purpleGem + userScore;
    $("#your-score").text("Your Total Score Is: " + userScore);

    if (userScore == totalScore) {
        userWins = userWins + 1;
        $("#user-wins").text("Wins: " + userWins);
        resetGame();

}   if (userScore > totalScore) {
        userLosses = userLosses + 1;
        $("#user-losses").text("Losses: " + userLosses);
        resetGame();
    }
});  

});

});