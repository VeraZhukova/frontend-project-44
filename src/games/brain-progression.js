import readlineSync from 'readline-sync'
import { greetUser, generateNumber, checkAnswer } from '../index.js'

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

export const main = () => {
  const name = greetUser()
  console.log('What number is missing in the progression?')
  for (let i = 0; i < 3; i += 1) {
    const progression = getArithmeticProgression()
    const randomIndex = Math.floor(Math.random() * progression.length)
    const maskedProgression = maskProgressionElement(progression, randomIndex)

    console.log(`Question: ${maskedProgression.join(' ')}`)
    const answer = readlineSync.question('Your answer: ')
    const correctAnswer = progression[randomIndex]

    const result = checkAnswer(Number(answer), Number(correctAnswer), name)
    if (result === false) {
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}
