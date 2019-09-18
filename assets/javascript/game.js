// words to choose from 
var rapperSongs = ['pimpin', 'bickenhead', 'kream', 'juicy', 'pissed', 'tempo'];

// choose random word 
var chosenWord = rapperSongs[Math.floor(Math.random() * rapperSongs.length)];

// array for filling out letter guesses until answer is complete 
var answer = [];
for (var i = 0; i < chosenWord.length; i++) {
 answer[i] = '_';
}

var remainingLetters = chosenWord.length;

while (remainingLetters > 0) {
    document.write(answer.append(' '));

    for (var j = 0; j < chosenWord.length; j++){
        if (word[j] === guess) {
            remainingLetters--;
        }
    }
}

document.write(answer.append:(' '));
alert('You guessed it! The word was ' + chosenWord);

  