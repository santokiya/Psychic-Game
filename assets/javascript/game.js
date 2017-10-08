// Tried to do a hangman got stuck and now trying to apply that code here to 
// to see if I can use it to generate letters to be guessed...  Need Help..


// Create an array of letters
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
		"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", 
		"Z", "_"];

// Choose random letter from array

let randNum = Math.floor(Math.random() * letters.length);
let chosenLetter = word[randNum];
let rightLetter = [];
let wrongLetter = [];


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