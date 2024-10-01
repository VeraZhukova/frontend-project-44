import readlineSync from 'readline-sync';
import { greetUser, generateNumber, checkAnswer  } from '../src/index.js';

const isEven  = (number) => number%2 === 0;

export const main = () => {
  const name = greetUser();
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`)
  for (let i = 0; i < 3; i+=1) {
    const number = generateNumber()
    console.log(`Question: ${number}`)
    const answer = readlineSync.question(`Your answer: `)
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    const result = checkAnswer(answer, correctAnswer, name);
    if(result === false) {
      return
    }
  }
  console.log(`Congratulations, ${name}!`);
}