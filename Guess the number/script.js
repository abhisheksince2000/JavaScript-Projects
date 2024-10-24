let numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess-input').value);
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');
    
    attempts++;
    
    if (userGuess < numberToGuess) {
        message.textContent = 'Too low! Try again.';
    } else if (userGuess > numberToGuess) {
        message.textContent = 'Too high! Try again.';
    } else if (userGuess === numberToGuess) {
        message.textContent = `Congratulations! You guessed it right. The number was ${numberToGuess}.`;
        attemptsDisplay.textContent = `You guessed the number in ${attempts} attempts.`;
        document.getElementById('restart').style.display = 'inline-block';
    } else {
        message.textContent = 'Please enter a valid number.';
    }
}

function restartGame() {
    numberToGuess = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guess-input').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('attempts').textContent = '';
    document.getElementById('restart').style.display = 'none';
}
