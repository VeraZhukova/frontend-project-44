import readlineSync from 'readline-sync'
import { generateNumber, runGame } from '../index.js'

function gcd(number1, number2) {
  while (number2 !== 0) {
    const temp = number2
    number2 = number1 % number2
    number1 = temp
  }
  return number1
}

const gcdRules = () => {
  const number1 = generateNumber()
  const number2 = generateNumber()
  console.log(`Question: ${number1} ${number2}`)
  const answer = Number(readlineSync.question('Your answer: '))
  const correctAnswer = gcd(number1, number2)
  return { answer, correctAnswer }
}

export const main = () => {
  runGame('Find the greatest common divisor of given numbers.', gcdRules)
}

