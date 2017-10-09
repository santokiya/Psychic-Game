// Create an array of words
const word = ["Happy", "Halloween", "Superallesgutja", "Chicken-ass"];

// Choose random word from array

let randNum = Math.floor(Math.random() * word.length);
let chosenWord = word[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];

// DOM manipulation
let doc underScore = document.getElementsByClassName("underscore");

// Main

// code here maybe???

// Create underscores based on the length of the word
let generateUnderscore = () => {
	for(let i =0; i < chosenWord.length; i++) {
		underScore.push("_");
		docUnderScore[0].innerHtml = underScore.join(" ");

// Get users guess
document.addEventListener("keypress", (event) => {
	let keyword = String.fromCharcode(event.keyCode);

// If the user's guess is correct

if(chosenWord.indexOf(keyword) > -1) {

// add to the right words array
	rightWord.push(keyword);

// replace underscore with right letter

	underScore[chosenWord.indexOf(keyword)] = keyword;

// Verify if user word matches guesses

	if(underScore.join(" ") == chosenWord) {
		alert("Winner! Winner! Chicken-ass Dinner!");
	}
}
else{
	wrongWord.push(keyword);
}
});

innerHtml = generateUnderscore().join(" ");
	}
}