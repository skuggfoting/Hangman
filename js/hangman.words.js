hangman.words = (function() {
    var words = [];

    words.push('Bajs');
    words.push('Tårdyvel');
    words.push('Nationalencyklopedin');
    words.push('Indolent');

    var word = _.sample(words);
    console.log(word);
    return word;
}());
