// Array and variables 
var rapperSongs = ['pimpin', 'bickenhead', 'kream', 'juicy', 'pissed', 'tempo', 'anaconda', 'starships,', 'drip', 'yuso', 'realer', 'dance', 'ratchet', 'only', 'chunli', 'llc'];
var chosenWord = '';
var lettersInWord = [];
var numberOfBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters= [];
var winCount = 0;
var lossCount = 0;
var guessesRemaining = 10;

// Functions
function startGame() {
    chosenWord = rapperSongs[Math.floor(Math.random() * rapperSongs.length)];
    lettersInWord = chosenWord.split('');
    numberOfBlanks = lettersInWord.length;

    // For Testing/debugging 
    console.log(chosenWord);
    console.log(lettersInWord);
    console.log(numberOfBlanks);

    // Resetting 
    guessesRemaining = 10;
    wrongLetters = [];
    blanksAndSuccesses = [];

    // Fill in blanks with correct guesses
    for (var i = 0; i < numberOfBlanks; i++) {
        blanksAndSuccesses.push('_');
    }

    // For Testing/debugging 
    console.log(blanksAndSuccesses);

    // Reflect in html 
    document.getElementById('songToGuess').innerHTML = blanksAndSuccesses.join(' ');
    document.getElementById('numGuesses').innerHTML = guessesRemaining;
    document.getElementById('winCounter').innerHTML = winCount;
    document.getElementById('lossCounter').innerHTML = lossCount;
}

function checkLetters(letter) {
    //Checking to see if letter is in word at all
    var isLetterInWord = false;

    for (var i = 0; i < numberOfBlanks; i++) {
        if (chosenWord[i] === letter) {
            isLetterInWord = true;
        }
    }
    // Find where letter is and fill in the blank 
    if(isLetterInWord) {
    for (var i = 0; i < numberOfBlanks; i++) {
        if(chosenWord[i] === letter) {
            blanksAndSuccesses[i] = letter;
            }
        }
    }

    // Letter not in word 
    else {
        wrongLetters.push(letter);
        guessesRemaining--
    }

    // Testing/debugging 
    console.log(blanksAndSuccesses);
}

function roundComplete() {
    console.log('Win Count: ' + winCount + ' | Loss Count: ' + lossCount + ' | Guesses Left: ' + guessesRemaining);

    // Check if won 
    if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert('Winner!');
// Want to play song

    // Update counter 
    document.getElementById('winCounter').innerHTML = winCount;
    startGame();
    }

    // Check if lost 
    else if (guessesRemaining === 0) {
        lossCount++;
        alert('Loser!');

    // Update counter 
    document.getElementById('lossCounter').innerHTML = lossCount;
    startGame();
    }

    // Update  stats
    document.getElementById('numGuesses').innerHTML = guessesRemaining;
    document.getElementById('songToGuess').innerHTML = blanksAndSuccesses.join(' ');
    document.getElementById('incorrectGuesses').innerHTML = wrongLetters.join(' ');
}

// To make the game work 
startGame();

document.onkeyup = function(event) {
    var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(lettersGuessed);
    roundComplete();

    // Testing/debugging
    console.log(lettersGuessed);
}
