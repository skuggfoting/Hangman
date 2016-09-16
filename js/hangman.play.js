hangman.play = function() {

    var word = hangman.words;
    hangman.ui.printEmptyBoard(word);

    var guess = hangman.ui.guessPrompt();
    hangman.logic.checkInput(guess, word);

};
