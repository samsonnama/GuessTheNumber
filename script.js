'use strict';

let random = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '🔴 No Number..';
  } else if (guess > 20) {
    document.querySelector('.message').textContent = 'Enter Value Less Than 20';
  } else if (guess === random) {
    document.querySelector('.message').textContent = 'Correct Answer..🕺🕺';
    document.querySelector('.number').textContent = random;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textcontent = highscore;
    }
  } else if (guess > random) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too High!';
      score--;
      document.querySelector('body').style.backgroundColor = 'orange';
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game';
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } else if (guess < random) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too Low!';
      score--;
      document.querySelector('body').style.backgroundColor = 'blue';
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game';
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = score;
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  random = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';
});
