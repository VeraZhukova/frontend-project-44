import readlineSync from 'readline-sync';
import { greetUser, generateNumber, checkAnswer  } from '../src/index.js';

function isPrime(num) {
    if (num <= 1) return false; 
    if (num === 2) return true; 
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
}

export const main = () => {
  const name = greetUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i+=1) { 
    const number = generateNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question(`Your answer: `);
    const correctAnswer = isPrime(number)?
    'yes' : 'no';
    const result = checkAnswer(answer, correctAnswer, name);
    if(result === false) {
      return
    }
  }
  console.log(`Congratulations, ${name}!`);
}