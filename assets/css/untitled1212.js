var 

<script>
alert("You have 10 guesses. Guess 1-10");

var answer = 3;
var guess = prompt("What's your guess?");

for (i=0; i<10, i++){
		console.log(i + 1);
		guess = prompt("What's your guess?");
		if answer == guess) {
				alert("You guessed correctly");
				break;
		}else{
				alert("Please Try Again..");
		}
}

</script>
