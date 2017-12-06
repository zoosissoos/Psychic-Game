const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var computerLetter;
var wins = 0;
var losses = 0;
var guessCounter;
var guesses = [];

const winText = document.getElementById("userWins");
const lossText = document.getElementById("lose");
const guessCounterText = document.getElementById("guessCount");
const guessedLetters = document.getElementById("guesses");


function start(){
	computerLetter = letters[Math.floor(Math.random()*letters.length)];
	guesses = [];
	guessedLetters.textContent = guesses;
	guessCounter = 9;
	guessCounterText.textContent = guessCounter;
	console.log(computerLetter)
}	

document.onload = start();

document.onkeydown = function(event) { 
      var userMove = event.key;
      userMove = userMove.toUpperCase();
      if (letters.indexOf(userMove)== -1){
      	alert("please enter a letter.")
      }else if(guesses.indexOf(userMove) !== -1){
      	alert("You already guessed that letter!")
      }else{
      	if (userMove == computerLetter){
		        wins++;
		        winText.textContent = wins;
		        console.log("Win");
		        start();
		      }else{
		      	console.log(userMove.toUpperCase())
		      	guessCounter--;
		      	guesses.push(userMove);
		      	guessedLetters.textContent = guesses;
		      	guessCounterText.textContent = guessCounter;
		      	console.log("nope")
		      }
		  }	
  };

  document.onkeyup = function(event){
  	if(guessCounter <= 0){
      	losses++;
  		start();
  		lossText.textContent = losses;
      }else{
      	return null;
      }

  }