import readlineSync from 'readline-sync';
import { greetUser, generateNumber, checkAnswer } from '../index.js';

function gcd(number1, number2) {
  while (number2 !== 0) {
    const temp = number2;
    number2 = number1 % number2;
    number1 = temp;
  }
  return number1;
}

export const main = () => {
  const name = greetUser();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const number1 = generateNumber();
    const number2 = generateNumber();
    console.log(`Question: ${number1} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = gcd(number1, number2);
    const result = checkAnswer(Number(answer), Number(correctAnswer), name);
    if (result === false) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
