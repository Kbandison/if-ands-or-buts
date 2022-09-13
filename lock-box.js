'use strict';

const prompt = require('prompt-sync')();

let passCode = 1528;

let unlockCode = prompt('What is the Passcode? ');

if (unlockCode == passCode) {
  console.log('Success!');
} else if (unlockCode != passCode) {
  console.log('Failure!');
}
