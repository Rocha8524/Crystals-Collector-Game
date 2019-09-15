// Make function available after the document is loaded.
$(document).ready(function() {

// Set up varaiables for the game score and wins/losses tallies
var userWins = 0;
$("#user-wins").text("Wins: " + userWins);

var userLosses = 0;
$("#user-losses").text("Losses: " + userLosses);

var userScore = 0;
$("#your-score").text("Your Score: " + userScore)

var totalScore = Math.floor(Math.random() * 120) - 19;
$("#target-score").text("Target Score: " + totalScore);

// Set up crystal variables
var greenGem = Math.floor(Math.random() * 12) + 1;
var yellowGem = Math.floor(Math.random() * 12) +1;
var blueGem = Math.floor(Math.random() * 12) + 1;
var purpleGem = Math.floor(Math.random() * 12) + 1;
var lightGem = Math.floor(Math.random() * 12) + 1;

// Reset game scores and emerald values after each win and loss
function resetGame () {
    userScore = 0;
    totalScore = Math.floor(Math.random() * 120) - 19;
    blueGem = Math.floor(Math.random() * 12) + 1;
    greenGem = Math.floor(Math.random() * 12) + 1;
    yellowGem = Math.floor(Math.random() * 12) + 1;
    purpleGem = Math.floor(Math.random() * 12) + 1;
    lightGem = Math.floor(Math.random() * 12) + 1;
}

// Create functions for wins and losses
function userWin () {
    $("#user-wins").text("Wins: " + userWins);
    userWin = userWin + 1;
    resetGame();
}

function userLose () {
    $("#user-losses").text("Losses: " + userLosses);
    userLose = userLose + 1;
    resetGame();
}

// Emerald click functions for the game
$(".blue-emerald").click(function() {
    userScore = blueGem + userScore;
    $("#your-score").text("Your Total Score Is: " + userScore);
    
    if (userScore == totalScore) {
        userWin ();
    }   
    if (userScore > totalScore)   {
        userLose ();
    }

});   

$(".green-emerald").click(function() {
    userScore = greenGem + userScore;
    $("#your-score").text("Your Total Score Is: " + userScore);
        
    if (userScore == totalScore) {
        userWin ();
}   if (userScore > totalScore)   {
        userLose ();
    }
});  

$(".yellow-emerald").click(function() {
    userScore = yellowGem + userScore;
    $("#your-score").text("Your Total Score Is: " + userScore);
            
    if (userScore == totalScore) {
        userWin ();
    
}   if (userScore > totalScore)   {
        userLose ();
    }
});     

$(".purple-emerald").click(function() {
    userScore = purpleGem + userScore;
    $("#your-score").text("Your Total Score Is: " + userScore);

    if (userScore == totalScore) {
        userWin();

}   if (userScore > totalScore) {
        userLose ();
    }
});  

$(".turquiose-emerald").click(function() {
    userScore - lightGem + userScore;
    $("#your-score").text("Your Total Score Is: " + userScore);
    
    if (userScore == totalScore); {
    userWin ();
    }   
    if (userScore > totalScore) {
    userLose ();
}

});

});
