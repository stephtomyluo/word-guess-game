// Arrays, objects, and variables 
var rapperSongs = [
    {songName:'pimpin', songURL:'https://www.youtube.com/watch?v=grrEPabL3Qo'}, 
    {songName:'bickenhead', songURL:'https://www.youtube.com/watch?v=ZTPhNIKeKgw'}, 
    {songName:'kream', songURL:'https://www.youtube.com/watch?v=t7lM7Bn16Zg'}, 
    {songName:'juicy', songURL:'https://www.youtube.com/watch?v=YIALlhlyqO4'}, 
    {songName:'pissed', songURL:'https://www.youtube.com/watch?v=9O1uBz8SK5w'}, 
    {songName:'tempo', songURL:'https://www.youtube.com/watch?v=Srq1FqFPwj0'}, 
    {songName:'anaconda', songURL:'https://www.youtube.com/watch?v=LDZX4ooRsWs'},
    {songName:'starships,', songURL: 'https://www.youtube.com/watch?v=SeIJmciN8mo'},
    {songName:'drip', songURL:'https://www.youtube.com/watch?v=H4Hb6HcCm_E'},
    {songName:'yuso', songURL:'https://www.youtube.com/watch?v=itohm9OYUz4'},
    {songName:'realer', songURL:'https://www.youtube.com/watch?v=lDWeob50YY8'},
    {songName:'dance', songURL:'https://www.youtube.com/watch?v=5tTqL79xidY'},
    {songName:'ratchet', songURL:'https://www.youtube.com/watch?v=5tTqL79xidY'},
    {songName:'only', songURL:'https://www.youtube.com/watch?v=zXtsGAkyeIo'},
    {songName:'chunli', songURL:'https://www.youtube.com/watch?v=Wpm07-BGJnE'},
    {songName:'llc', songURL:'https://www.youtube.com/watch?v=Jv2GAthexF8'}];
var chosenWord = '';
var chosenSongName = '';
var chosenSongURL = '';
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
    chosenSongName = chosenWord.songName;
    chosenSongURL = chosenWord.songURL;
    lettersInWord = chosenSongName.split('');
    numberOfBlanks = lettersInWord.length;

    // For Testing/debugging 
    console.log(chosenSongName);
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
        if (chosenSongName[i] === letter) {
            isLetterInWord = true;
        }
    }
    // Find where letter is and fill in the blank 
    if(isLetterInWord) {
    for (var i = 0; i < numberOfBlanks; i++) {
        if(chosenSongName[i] === letter) {
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
        alert('Winner! The song ' + chosenSongName + ' can be enjoyed at ' + chosenSongURL);
// Want to play song

    // Update counter 
    document.getElementById('winCounter').innerHTML = winCount;
    startGame();
    }

    // Check if lost 
    else if (guessesRemaining === 0) {
        lossCount++;
        alert('Loser! The song ' + chosenSongName + ' can be enjoyed at ' + chosenSongURL);

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
    var checkChar = lettersGuessed.match(/^[a-z]+$/);
    
    if (checkChar === null) {
        alert('Please choose a letter!')
    }
    else {
        checkLetters(lettersGuessed);
        roundComplete();
    }

    // Testing/debugging
    console.log(lettersGuessed);
    console.log(checkChar);
    // If wanted to ding them - move checkChar to checkLetters 
}
