'use strict';

const prompt = require('prompt-sync')();

let player1 = prompt("Player 1, enter 'Rock', 'Paper', or 'Scissors': ");
let player2 = prompt("Player 2, enter 'Rock', 'Paper', or 'Scissors': ");

if (player1 == 'rock' && player2 == 'paper') {
  console.log('Player 2 wins!');
} else if (player1 == 'paper' && player2 == 'scissors') {
  console.log('Player 2 wins!');
} else if (player1 == 'scissors' && player2 == 'rock') {
  console.log('Player 2 wins!');
} else if (player1 == 'paper' && player2 == 'rock') {
  console.log('Player 1 wins!');
} else if (player1 == 'scissors' && player2 == 'paper') {
  console.log('Player 1 wins!');
} else if (player1 == 'rock' && player2 == 'scissors') {
  console.log('Player 1 wins!');
 } else if(player1 === player2) {
  console.log('Draw!');
} 
