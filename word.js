// creating a constructor function to check the letter entered by user
//if the letter is present in the word then return true else false

var wordDetails = function(wordToFind){
	//console.log("inside wordDetails");
	this.numGuesses = 0;
	
	this.wordToFind = wordToFind;
	this.numBlanks = wordToFind.length;
	//console.log("this.wordToFind:"+this.wordToFind );

	this.checkChar = function(letter){
		//console.log("inside checkChar");
		//console.log("letter:"+letter);
		this.letter = letter;

		//console.log("this.letter:"+this.letter);
		
		var letterInWord = false;
		//console.log("this.numBlanks: "+this.numBlanks );
		// Check if a leter exists inside the array at all.
		for (var i=0; i<this.numBlanks; i++) {
			//console.log("inside for loop character -- for verification -- count:"+i+", wordToFind[i]"+this.wordToFind[i]);
			if(this.wordToFind[i] == letter) {
				//console.log("inside if in word.js");
				letterInWord = true;
				 // if the letter exists then toggle this boolean to true. This will be used in the next step. 
				return true;
	 		}

		}
		return false;
	}
}

module.exports = wordDetails;