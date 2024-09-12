let randomNumber = Math.floor(Math.random() * 10) + 1;

let userGuess = 0;

while (userGuess !== randomNumber) {
 
  userGuess = parseInt(prompt("Guess a number between 1 and 10: "));

  if (userGuess === randomNumber) {
    alert("Congratulations! You guessed the correct number: " + randomNumber);
  } else {
    alert("Wrong guess! Try again.");
  }
}
