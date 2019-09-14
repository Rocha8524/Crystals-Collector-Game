// Make function available after the document is loaded.
$(document).ready(function() {

// Set up varaiables for the game score and wins/losses tallies
var userWins = 0;
$("#user-wins").text("Wins: " + userWins);

var userLosses = 0;
$("#user-losses").html("Losses: " + userLosses);

var userScore = 0;
$("#your-score").html("Your Total Score Is: " + userScore)

var compScore = Math.floor(Math.random() * (120 - 20 + 1));
$("#target-score").html("Target Score: " + compScore);
console.log(compScore);


// Set up crystal variables
var redGem = Math.floor(Math.random() * ( 11 + 1 ));
var greenGem = Math.floor(Math.random() * ( 11 + 1 ));
var yellowGen = Math.floor(Math.random() * ( 11 + 1 ));
var blueGem = Math.floor(Math.random() * ( 11 + 1 ));
var purpleGem = Math.floor(Math.random() * ( 11 + 1 ));
var lightGem = Math.floor(Math.random() * ( 11 + 1 ));

// Reset game after each win and loss

// Create functions for wins, losses and crystal values


});
