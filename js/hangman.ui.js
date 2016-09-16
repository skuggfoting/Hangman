hangman.ui = {};

var board = [];

hangman.ui.printEmptyBoard = function(word) {
    for (var i = 0; i < word.length; i++) {
        board.push('_');
    }
    hangman.pic(0);
    console.log(board.join(' '));
    // return board;
};

hangman.ui.printFillingBoard = function(guess, word) {
    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) === guess) {
            board.splice(i, 1, guess);
        }
    }
    console.log(board.join(' '));
    // return board;
}

hangman.ui.guessPrompt = function() {
    var guess = prompt('Guess a letter or word.');
    return guess;
};

hangman.ui.winAlert = function() {
    alert('Yeay you won this awesome game, yeay :)');
};

hangman.ui.defeateAlert = function() {
    alert('Neay you lost this awesome game, you suck :/');
};

hangman.ui.notValidGuessAlert = function() {
    alert('Not a letter or wrong word lenght. Seriousley how stupid are you?');
};


// else if (board.join('') === word) {
//     hangman.ui.winAlert();
//
// }
