import readlineSync from 'readline-sync'

import { generateNumber, runGame } from '../index.js'

const generateOperator = () => {
  const operators = ['+', '-', '*']
  const index = Math.floor((Math.random() * operators.length))
  return operators[index]
}

const generateExpression = () => {
  const number1 = generateNumber()
  const number2 = generateNumber()
  const operator = generateOperator()
  const expression = `${number1} ${operator} ${number2}`
  return expression
}

const calcRules = () => {
  const expression = generateExpression()
  console.log(`Question: ${expression}`)
  const answer = Number(readlineSync.question('Your answer: '))
  const correctAnswer = eval(expression)
  return { answer, correctAnswer }
}

export const main = () => {
  runGame('What is the result of the expression?', calcRules)
}
