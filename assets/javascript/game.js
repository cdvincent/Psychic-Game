var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guess = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var prevGuesses = document.getElementById("prevGuesses-text");



var randomLetter = letter[Math.floor(Math.random()*letter.length)];
console.log(randomLetter)


var newLetter = function(){
    var randomLetter = letter[Math.floor(Math.random()*letter.length)];
    guessesLeft = 10;
    guess = [];
    console.log(randomLetter)
}



document.onkeyup = function(event){
    
    guessesLeft--;
    
    var guess = event.key.toLowerCase();
    console.log(guess)
    
    
    if (guess === randomLetter){
        wins++;
        newLetter();
        
    }   else if (guessesLeft === 0){
        losses++;
        newLetter();
    }
    
    
    
    
    
    
    
    
    
    
    

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    prevGuesses.textContent = "Previous Guesses: " + guess;
    
}