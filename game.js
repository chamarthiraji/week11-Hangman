//selects a word randomly from an array
//var wordBank = ["apple","banana","grapes"];
/*var randomWord = function(){
	this.wordBank = ["apple","banana","grapes"];
	//var rNumber = Math.floor(Math.random() * 3);
	 this.rWord = function(){
	  	return this.wordBank[ Math.floor(Math.random() * 3)];
	  	console.log("rNumber "+rNumber);
	  	conssole.log("wordBank[rNumber] "+this.wordBank[ Math.floor(Math.random() * 3)]);
	}
	
} */
//module.exports = randomWord;
//randomWord1 = new randomWord();
//randomWord1.rWord();


var  randomWord =function(){
	this.wordBank = ["apple","banana","grapes"];
	this.rWord = function(){
	  	
		 return this.wordBank[ Math.floor(Math.random() * 3)];
	}
}

module.exports = randomWord;