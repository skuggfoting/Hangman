hangman.logic = {};

var nrOfGuesses = 0;
var wrongGuesses = [];

hangman.logic.checkInput = function(guess, word) {
    while (guess !== undefined) {
        var guess = guess.trim().toLowerCase();
        var word = word.trim().toLowerCase();

        if (hangman.logic.isLetter(guess)) {
            while (nrOfGuesses < 6) {
                if (guess.length === 1) {
                    if (_.contains(word, guess)) {
                        hangman.ui.printFillingBoard(guess, word);

                        var guess = hangman.ui.guessPrompt();
                        hangman.logic.checkInput(guess, word);
                    } else if (nrOfGuesses < 5) {
                        nrOfGuesses++;
                        wrongGuesses.push(guess.toUpperCase());

                        console.log('Felgissningar kvar innan hängning: ' + (6 - nrOfGuesses));
                        console.log('Felgissningar: ' + wrongGuesses);
                        hangman.pic(nrOfGuesses);

                        var guess = hangman.ui.guessPrompt();
                        hangman.logic.checkInput(guess, word);
                    } else {
                        nrOfGuesses++;

                        console.log('Felgissningar kvar innan hängning: ' + (6 - nrOfGuesses));
                        hangman.pic(nrOfGuesses);

                        hangman.ui.defeateAlert();
                    }
                } else if (guess.length === word.length) {
                    if (guess === word) {
                        console.log(hangman.ui.winAlert());
                    } else {
                        var guess = hangman.ui.guessPrompt();
                        hangman.logic.checkInput(guess, word);
                    }

                } else {
                    hangman.ui.notValidGuessAlert();
                    var guess = hangman.ui.guessPrompt();
                    hangman.logic.checkInput(guess, word);
                }
            }
        } else {
            hangman.ui.notValidGuessAlert();
            var guess = hangman.ui.guessPrompt();
            hangman.logic.checkInput(guess, word);
        }
    }
};

hangman.logic.isLetter = function(str) {
    return str.length === 1 && str.match(/[a-ö]/i);
};
