'use strict';
//by 'document.querySelector('.message')', the element is selected.
//and by '.textContent', we can read the testContent property on that selected element

//DOM = Document Object Model = a structured representation of HTML documents
//By DOM, we can change our JavaScript to text, HTML, and CSS styles.
//That is, DOM is basically a connection point between HTML documents and JavaScript code.

//DOM is automatically created by the broser as soon as the HTML page loads.
//And it's stored in a tree structure.
//In the tree, each HTML element is one object.

//'document' is a special object that is the entry point to the DOM. we need 'document' to start selecting elements.
//usually, the first child element of 'document' is HTML element.

//'DOM' and 'DOM elements' are not the part of JavaScript language.
//They are actually part of webAPIs. (API=Application Programming Interface)
//webAPIs are like libraries that browsers implement, and that we can access from our JavaScript code.
//webAPIs are also written in JavaScript and they're automatically available for us to use.

/*
//Selecting and manipulating elements
console.log(document.querySelector('.message').textContent); //querySelector is a method that's available on the document object //reading the content of the element
document.querySelector('.message').textContent = 'Correct Number!'; //Set the message with 'Correct Number!'
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 15; //. means class
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  //we need to give 'event' and 'react', for argument of addEventListener. the 'react' is called 'event handler'
  //In this example, 'click' is event, and the function is eventHandler.

  const guess = Number(document.querySelector('.guess').value);
  //When there is no input
  if (!guess) displayMessage('😡No Number!😡');
  //because the input type is number. if the type is not a number, guess will be false
  //When the input is wrong
  else if (guess > 20 || guess < 1) displayMessage('😹Wrong Input!😹');
  //When player wins
  else if (guess === secretNumber) {
    if (highScore < score) highScore = score;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉Correct Number!🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  //When guess is wrong
  else {
    score -= 1;
    document.querySelector('.score').textContent = score;
    if (score > 0)
      displayMessage(guess < secretNumber ? '👍Go Up!👍' : '👎Go Down!👎');
    else {
      displayMessage('😭You lost the game!😭');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1; //don't use 'let'
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
});
