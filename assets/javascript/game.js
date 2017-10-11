// Create an array of letters
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
		"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", 
		"Z"];

// Choose random letter from array
var randomLetter = letters[Math.floor(Math.random() * letters.length)];

let rightLetter = [];
let wrongLetter = [];

// Guess counters
var winCount = 0
var lossCount = 0
var guessCount = 9
var userGuessed = []

// Main

// reset here
var resetGame = function(){
	guessLeft = 9;
	userGuessed = [];
	randomLetter = letters[Math.floor(Math.random() * letters.length)];
};

// Select a div to input the HTML 




// Add a function for printToHTML
//var statusDOM = "Winning Letter<b>" + winCount + "</b><br>" +
				//"Losing Letter<b>" + lossCount + ""

// Get users guess
document.onkeyup = function(event){
	var currentGuess = event.key; 

// Comparing letter guess to user guess?
 if(letters.includes(currentGuess)){
 	alert("Letter guessed already");
 } else {
// 	// If there are any guesses left, then compare
// 	// If guess is correct then add 1 to winCount else subtract 1
 	if (guessLeft > 1){
		if (randomLetter === currentGuess){
 			winCount += 1;
 			alert("You won with: " + randomLetter);
 			resetGame();			
 		} else {
 			guessLeft -= 1;
 			userGuessed.push(currentGuess);
 		};
 		//printToHTML();
// 	// if there are no more guesses left then provide letter and reset
 	} else {
		guessLeft = 0;
 		lossCount += 1;
 		userGuessed.push(currentGuess);
 		//printToHTML();
 		alert("Winner was: " + randomLetter);
 		resetGame();
 
	//printToHTML();
 };
 } //else {
 // 	alert("Please pick a letter");
 // };
 document.getElementById("let").innerHTML = "Your guesses so far: " + userGuessed;
 document.getElementById("wins").innerHTML = "Wins: " + winCount;
document.getElementById("losses").innerHTML = "Losses: " + lossCount;
document.getElementById("guessLeft").innerHTML = "Guesses Left: " + guessLeft;
}