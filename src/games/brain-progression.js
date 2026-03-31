import readlineSync from 'readline-sync'
import { generateNumber, runGame } from '../index.js'

function getArithmeticProgression() {
  const progression = []
  const num1 = generateNumber()
  const n = 10
  const difference = 3
  for (let i = 0; i < n; i++) {
    progression.push(num1 + i * difference)
  }
  return progression
}

const maskProgressionElement = (progression, index) => {
  const newProgression = []
  for (let i = 0; i < progression.length; i++) {
    if (i === index) {
      newProgression.push('..')
    }
    else {
      newProgression.push(progression[i])
    }
  }
  return newProgression
}

const progressionRules = () => {
  const progression = getArithmeticProgression()
  const randomIndex = Math.floor(Math.random() * progression.length)
  const maskedProgression = maskProgressionElement(progression, randomIndex)
  console.log(`Question: ${maskedProgression.join(' ')}`)
  const answer = Number(readlineSync.question('Your answer: '))
  const correctAnswer = progression[randomIndex]
  return { answer, correctAnswer }
}

export const main = () => {
  runGame('What number is missing in the progression?', progressionRules)
}