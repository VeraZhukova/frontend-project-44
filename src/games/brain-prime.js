import readlineSync from 'readline-sync'
import { generateNumber, runGame } from '../index.js'

function isPrime(num) {
  if (num <= 1) return false
  if (num === 2) return true
  if (num % 2 === 0) return false

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false
  }
  return true
}

const primeRules = () => {
  const number = generateNumber()
  console.log(`Question: ${number}`)
  const answer = readlineSync.question('Your answer: ')
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  return { answer, correctAnswer }
}

export const main = () => {
  runGame('Answer "yes" if given number is prime. Otherwise answer "no".', primeRules)
}
