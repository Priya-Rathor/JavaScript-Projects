let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function makeGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    attempts++;
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById('feedback').innerText = "Please enter a number between 1 and 100.";
        return;
    }
    
    if (guess === randomNumber) {
        document.getElementById('feedback').innerText = `Congratulations! You guessed the number!`;
        document.getElementById('attempts').innerText = `It took you ${attempts} attempts.`;
    } else if (guess < randomNumber) {
        document.getElementById('feedback').innerText = "Too low! Try again.";
    } else {
        document.getElementById('feedback').innerText = "Too high! Try again.";
    }
}
