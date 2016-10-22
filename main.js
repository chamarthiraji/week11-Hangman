var wordDetails = require('./word.js');
var randomWord = require('./game.js');
var inquirer = require('inquirer');
var letter = require('./letter.js');
var count = 0;
var numOfGuesses = 10;

var wrongGuesses =[];

var randomWord1 = new randomWord();
var wordToFind = randomWord1.rWord();

var letter2 = new letter();
letter2.blanksAndSuccesses(wordToFind);
var wordDetails2 = new wordDetails(wordToFind);
console.log("******************************************************");
console.log("             HangMan using Node(fruit names)          ");
console.log("******************************************************");

//console.log("word to find : "+wordDetails2.wordToFind);

var askQuestion = function() {
	//console.log("inside askQuestion");
	//console.log("Your Word So For : "+letter2.blanksArray.join(''));
  
	if(wordToFind == letter2.blanksArray.join('')){
		console.log("++++++ You won,your guess is correct ++++++");

	}else if (count < numOfGuesses) {
    	
        inquirer.prompt([{
            name: "letter",
            message: "Guess a letter?"
           }
        ]).then(function(answers) {
        	//console.log("answers.letter : "+ answers.letter);
           
           if( wordDetails2.checkChar(answers.letter) ) {
           		//console.log("inside word details if condition,before letter call");
           		letter2.replaceLetter(wordToFind,answers.letter);

           }
			// If the letter doesn't exist at all...
			else {
				wrongGuesses.push(answers.letter); 
				//this.numGuesses--; 
			}
            count++;
            console.log("Your Word So For : "+letter2.blanksArray);
            askQuestion();
        })
    
    } else {
        console.log("----- You Lost,Try Again ------");
    }
}

 askQuestion();