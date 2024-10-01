import readlineSync from 'readline-sync';

import { greetUser, generateNumber, checkAnswer  } from '../src/index.js';

const generateOperator = () => {
  const operators = ['+','-','*'];
  const index = Math.floor((Math.random() * operators.length));
  return operators[index];
}

const generateExpression = () => {
    const number1 = generateNumber()
    const number2 = generateNumber()
    const operator = generateOperator()
    const expression = `${number1}${operator}${number2}`
    return expression
}

export const main = () => {
    const name = greetUser();
    console.log ('What s the result of the expression?')
    for (let i=0; i<3; i +=1){
        const expression = generateExpression();
        console.log (`Question: ${expression}`)
        const answer = readlineSync.question(`Your answer `)
        const correctAnswer = eval(expression);
        const result = checkAnswer(answer, correctAnswer, name);
        if(result === false) {
          return
        }
    }
    console.log(`Congratulations, ${name}!`);
}