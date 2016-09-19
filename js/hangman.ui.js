hangman.ui = {};

var board = [];

hangman.ui.prompter = function(guess, word, graphic) {

    var graphic1 = hangman.ui.printFillingBoard(guess, word);
    var graphic2 = hangman.pic(nrOfGuesses);

    if (board.join('') === word) {
        hangman.ui.winAlert(word);
        nrOfGuesses = 6;
    } else {
        var guess = hangman.ui.guessPrompt('\nNr of wrong guesses until hanging: ' + (6 - nrOfGuesses) + '\nWrongly guessed letters: ' + wrongGuesses + '\n\n' + graphic1 + '\n' + graphic2);
        hangman.logic.checkInput(guess, word);
    }
};

hangman.ui.printEmptyBoard = function(word) {
    for (var i = 0; i < word.length; i++) {
        board.push('_');
    }
    hangman.pic(0);
    var emptyBoard = board.join(' ');
    return emptyBoard;
};

hangman.ui.printFillingBoard = function(guess, word) {
    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) === guess) {
            board.splice(i, 1, guess);
        }
    }
    var fillingBoard = board.join(' ');
    return fillingBoard;
}

hangman.ui.guessPrompt = function(graphic) {
    var guess = prompt('Lets try and not hang somebody today.\nGuess a letter or word.\n' + graphic);
    return guess;
};

hangman.ui.winAlert = function(word) {
    alert('Yeay you won this awesome game, yeay :)\nThe word was: ' + word);
};

hangman.ui.defeateAlert = function(word) {
    alert('Neay you lost this awesome game, you suck :/\nThe word was: ' + word + '\n' + hangman.pic(6));
};

hangman.ui.notValidGuessAlert = function(guess, word) {
    alert('NOT a letter or wrong word lenght. Seriousley how stupid are you?');
    hangman.ui.prompter(guess, word);
};
