//this is a constructor function to replace blanks with correct user guess letters
var letter = function() {
	this.blanksArray=[];
	this.blanksAndSuccesses = function(word){

		for(var i=0;i<word.length;i++){
			//console.log("inside replace letter for loop");
			this.blanksArray.push("_");
		}
	}
			
	this.replaceLetter = function(word,userInputLetter) {

// If the letter exists somewhere in the word, then figure out exactly where (which indices)
		if(word){
				
			// loop through the word 
			for (var i=0; i<word.length; i++){
				//console.log("inside for loop character count:"+i+", word[i]"+word[i]);

				// Populate the blanksAndSuccesses with every instance of the letter.
				if(word[i] == userInputLetter) {
					this.blanksArray[i] = userInputLetter; // here we set the specific space in blanks and letter equal to the letter when there is a match.
				}
			}
			//console.log("Your Word So For: "+this.blanksArray); // logging for testing
		}
	}
}
module.exports = letter;