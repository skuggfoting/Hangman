hangman.play = function(guess, word) {
    var word = hangman.words;

    hangman.ui.printEmptyBoard(word);

    hangman.ui.prompter(guess, word);
};
