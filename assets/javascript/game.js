var computerGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessSoFar = 9;
var guessedLetter = [];
var nextLetterGuess = null;
var computerGuessed = computerGuess[Math.floor(Math.random() * computerGuess.length)];
var computerLetter = function() {
	this.nextLetterGuess = this.computerGuess[Math.floor(Math.random() * this.computerGuess.length)];
}
var userGuessesLeft = function() {
	document.queryselector('#guessLeft').innerHTML = "Guesses left: " + guessLeft;
}
var userGuessesSoFar = function() {
	document.queryselector('#guessSoFar').innerHTML = "Your guesses so far: " + guessedLetter.join(', ');
}
var reset = function() {
	guessLeft = 9;
	guessedLetter = [];
	computerLetter();
	userGuessesLeft();
	userGuessesSoFar();
}
computerLetter();
userGuessesLeft();
document.onkeyup = function(event) {
	guessLeft--;
	var userLetter = String.fromCharCode(event.keyCode).toLowerCase();
	guessedLetter.push(userLetter);
	userGuessesLeft();
	userGuessesSoFar();
		if (guessLeft > 0){
		  if (userLetter == nextLetterGuess){
		      wins++;
		      document.querySelector('#wins').innerHTML = "Wins: " + wins;
		      reset();
		    }
		  }
		  else if(guessLeft == 0){
		    losses++;
		    document.querySelector('#losses').innerHTML = "Losses: " + losses;
			reset();
		  }
}
