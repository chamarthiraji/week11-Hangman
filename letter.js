//var randomWord = require('./game.js');

//var randomWord1 = new randomWord();
//randomWord1.rWord();
//console.log(randomWord1.wordBank);
//console.log(randomWord1.rWord());
//var wordToFind = randomWord1.rWord();
//var blanksAndSuccesses = [];
var letter = function() {
	this.blanksAndSuccesses = [];

	this.replaceLetter = function(word,userInputLetter) {
// If the letter exists somewhere in the word, then figure out exactly where (which indices)
		if(word){
		
			// loop through the word 
			for (var i=0; i<word.length; i++){
				console.log("inside for loop character count:"+i+", word[i]"+word[i]);

				// Populate the blanksAndSuccesses with every instance of the letter.
				if(word[i] == userInputLetter) {
					this.blanksAndSuccesses[i] = userInputLetter; // here we set the specific space in blanks and letter equal to the letter when there is a match.
				}
			}
			console.log("blanksAndSuccesses: "+this.blanksAndSuccesses); // logging for testing
		}
	}
}
module.exports = letter;