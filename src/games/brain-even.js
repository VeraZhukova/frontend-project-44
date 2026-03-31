import readlineSync from 'readline-sync'
import { generateNumber, runGame } from '../index.js'


const isEven = number => number % 2 === 0

const evenRules = () => {
  const number = generateNumber()
  console.log(`Question: ${number}`)
  const answer = readlineSync.question('Your answer: ')
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return { answer, correctAnswer }
}

export const main = () => {
  runGame('Answer "yes" if the number is even, otherwise answer "no".', evenRules)
}