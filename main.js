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

var wordDetails2 = new wordDetails(wordToFind);
console.log("word to find : "+wordDetails2.wordToFind);

var askQuestion = function() {
	console.log("inside askQuestion");
	console.log("blanksAndSuccesses: "+letter2.blanksAndSuccesses.join(''));
	if(wordToFind == letter2.blanksAndSuccesses.join('')){
		console.log("You won,your guess is correct");

	}else if (count < numOfGuesses) {
    	//IF STATEMENT TO ENSURE THAT OUR QUESTIONS ARE ONLY ASKED FIVE TIMES
        //RUNS INQUIRER AND ASKS THE USER A SERIES OF QUESTIONS WHOSE REPLIES ARE STORED WITHIN THE VARIABLE answers INSIDE OF THE .then STATEMENT.
        inquirer.prompt([{
            name: "letter",
            message: "Guess a letter?"
           }
        ]).then(function(answers) {
        	console.log("answers.letter : "+ answers.letter);
           
            //printInfo METHOD IS RUN TO SHOW THAT THE newGuy OBJECT WAS SUCCESSFULLY CREATED AND FILLED
           if( wordDetails2.checkChar(answers.letter) ) {
           		console.log("inside word details if condition,before letter call");
           		letter2.replaceLetter(wordToFind,answers.letter);

           }
			// If the letter doesn't exist at all...
			else {
				wrongGuesses.push(answers.letter); // then we add the letter to the list of wrong letters
				//this.numGuesses--; // and we subtract one of the guesses
			}
            //ADD ONE TO COUNT TO INCREMENT OUR RECURSIVE LOOP BY ONE
            count++;
            //RUN THE askQuestion FUNCTION AGAIN SO AS TO EITHER END THE LOOP OR ASK THE QUESTIONS AGAIN
            askQuestion();
        })
    //ELSE STATEMENT WHICH PRINTS "All questions asked" TO THE CONSOLE WHEN THE CODE HAS BEEN RUN FIVE TIMES
    } else {
        console.log("You lost");
    }
}

 askQuestion();