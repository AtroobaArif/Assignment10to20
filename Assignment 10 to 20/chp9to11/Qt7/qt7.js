var secretNumber = 7;
var guess = prompt("Guess the secret number (between 1 and 10):");

if (guess == secretNumber) {
  alert("Bingo! Correct answer.");
} else if (guess == secretNumber - 1 || guess == secretNumber + 1) {
  alert("Close enough to the correct answer.");
} else {
  alert("Sorry, try again.");
}
