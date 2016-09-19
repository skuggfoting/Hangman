hangman.logic = {};

var nrOfGuesses = 0;
var wrongGuesses = [];

hangman.logic.checkInput = function(guess, word) {

    if (guess !== null) {

        var guess = guess.trim().toLowerCase();
        var word = word.trim().toLowerCase();

        while (nrOfGuesses < 6) {
            if (hangman.logic.isLetter(guess)) {
                if (_.contains(word, guess)) {

                    hangman.ui.prompter(guess, word);
                } else if (nrOfGuesses < 5) {
                    nrOfGuesses++;
                    wrongGuesses.push(guess.toUpperCase());
                    guess = null;

                    hangman.ui.prompter(guess, word);
                } else {
                    nrOfGuesses++;

                    hangman.ui.defeateAlert(word);
                }
            } else if (guess.length === word.length) {
                if (guess === word) {
                    nrOfGuesses = 6;
                    hangman.ui.winAlert(word);
                } else {
                    hangman.ui.prompter(guess, word);
                }

            } else {
                hangman.ui.notValidGuessAlert(guess, word);
            }
        }
    } else {
        alert('Thanks for playing, come again!')
        nrOfGuesses = 6;
    }

};

hangman.logic.isLetter = function(str) {
    return str.length === 1 && str.match(/[a-ö]/i);
};
