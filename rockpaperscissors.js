var responses = ["Rock", "Paper", "Scissors"]
var response = responses[Math.floor(Math.random ()*responses.length)];

function play () {
  if (response = clickedId) {
    document.getElementById('computer-text').innerHTML = 'tie'
  }
  else {
    response = responses[Math.floor(Math.random()*responses.length)];
  return document.getElementById('computer-text').innerHTML = response
  }
}


/*
$(document).ready(function () {
  function updateTotal (){
    var total = 0;
    var entries = $('.entry')

    if (entries.length)
      $('#empty').show()
    else
  }
}
)

var responses = ["Rock", "Paper", "Scissors"]
var response = responses[Math.floor(Math.random()*responses.length)];

function play() {
  if (response = clickedId) {
    document.getElementById('computer-text').innerHTML = 'tie'
  } else {
    response = responses[Math.floor(Math.random()*responses.length)];
  return document.getElementById('computer-text').innerHTML = response
  }
 }
 */





var playerScore = 0;
var compScore = 0;

document.getElementById('rock').onclick=playRock;
document.getElementById('paper').onclick=playPaper;
document.getElementById('scissors').onclick=playScissors;
document.getElementById('reset').onclick=resetGame;

function playRock() {
  play('rock');
}

function playPaper() {
  play('paper');
}

function playScissors() {
  play('scissors');
}

function getCompChoice() {
var choices = ['rock', 'paper', 'scissors'];
var compChooses = choices[Math.floor(Math.random() * choices.length)];
return compChooses;
}

function play(userPlay) {
  var compChoice = getCompChoice();
  document.getElementById('playerResult').innerHTML = 'You played ' + userPlay + '.';
  document.getElementById('compResult').innerHTML = 'The computer played ' +  compChoice + '.';

  if (userPlay == 'rock') {
    if (compChoice == 'rock') {
    document.getElementById('winner').innerHTML = "It's a tie!";
    }
    else if (compChoice == 'paper') {
      document.getElementById('winner').innerHTML = "LOSER LOSER LOSER!";
      compScore++;
    }
    else if (compChoice == 'scissors') {
      document.getElementById('winner').innerHTML = "Winner winner, chicken dinner!";
      playerScore++;
    }
  }
  else if (userPlay == 'paper') {
    if (compChoice == 'paper') {
    document.getElementById('winner').innerHTML = "It's a tie!";
    }
    else if (compChoice == 'rock') {
      document.getElementById('winner').innerHTML = "Well played Sir!";
      playerScore++;
    }
    else if (compChoice == 'scissors') {
      document.getElementById('winner').innerHTML = "The robot has defeated the human!";
      compScore++;
    }
  }
  else if (userPlay == 'scissors') {
    if (compChoice == 'scissors') {
    document.getElementById('winner').innerHTML = "It's a tie!";
    }

    else if (compChoice == 'rock') {
      document.getElementById('winner').innerHTML = "HAH! I WIN!";
      compScore++;
    }

    else if (compChoice == 'paper') {
      document.getElementById('winner').innerHTML = "Looks like you beat me again!";
      playerScore++;
    }
  }
 document.getElementById('playerScore').innerHTML = playerScore;
 document.getElementById('compScore').innerHTML = compScore;
};
function resetGame () {
 playerScore = 0;
 compScore = 0;
 document.getElementById('playerScore').innerHTML = playerScore;
 document.getElementById('compScore').innerHTML = compScore;
};
