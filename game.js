//selects a word randomly from an array

var  randomWord =function(){
	this.wordBank = ["apple","banana","grapes"];
	this.rWord = function(){
	  	
		 return this.wordBank[ Math.floor(Math.random() * 3)];
	}
}

module.exports = randomWord;