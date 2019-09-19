// Global Variables 
// Arrays and Variables 
var rapperSongs = ['pimpin', 'bickenhead', 'kream', 'juicy', 'pissed', 'tempo', 'anaconda'];
var chosenWord = '';
var lettersInWord = [];
var numberOfBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters= [];

// Game Counters 
var winCount = 0;
var lossCount = 0;
var guessesRemaining = 10;



// Functions 
function startGame() {
    chosenWord = rapperSongs[Math.floor(Math.random() * rapperSongs.length)];
    lettersInWord = chosenWord.split('');
    numberOfBlanks = lettersInWord.length;

    // Resetting 
    guessesRemaining = 10;
    wrongLetters = [];
    blanksAndSuccesses = [];

    // Fill in blanks with correct guesses
    for (var i = 0; i < numberOfBlanks; i++) {
        blanksAndSuccesses.push('_');
    }

    // Reflect in html 
    document.getElementById('songToGuess').innerHTML = blanksAndSuccesses.join(' ');
    document.getElementById('remainingGuesses').innerHTML = guessesRemaining;
    document.getElementById('winCounter').innerHTML = winCount;
    document.getElementById('lossCounter').innerHTML = lossCount;
    
    // For Testing/debugging 
    console.log(chosenWord);
    console.log(lettersInWord);
    console.log(numberOfBlanks);
    console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
    //checking to see if letter is in word at all
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

    // letter not in word 
    else {
        wrongLetters.push(letter);
        guessesRemaining--
    }

    // Testing/debugging 
    console.log(blanksAndSuccesses);

}

function roundComplete() {
    console.log('Win Count: ' + winCount + ' | Loss Count: ' + lossCount + ' | Guesses Left: ' + guessesRemaining);

    //Update  stats
    document.getElementById(remainingGuesses).innerHTML = guessesRemaining;
    document.getElementById(songToGuess).innerHTML = blanksAndSuccesses.join(' ');
    document.getElementById(incorrectLetters).innerHTML = wrongLetters.join(' ');

    // check if won 
    if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert('Winner!');

    // update counter 
    document.getElementById('winCounter').innerHTML = winCount;
    startGame();
    }

    // check if lost 
    else if (guessesRemaining === 0) {
        lossCount++;
        alert('Loser!');
        startGame();

    // update counter 
    document.getElementById('lossCounter').innerHTML = lossCount;
    startGame();
    }
}


    
// Main Process 
startGame();

document.onkeyup = function(event) {
    var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(lettersGuessed);
    roundComplete();

    // Testing/debugging
    console.log(lettersGuessed);
}
