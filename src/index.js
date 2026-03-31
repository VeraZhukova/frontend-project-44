import readlineSync from 'readline-sync'

export function greetUser() {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name?: ')
  console.log(`Hello, ${name}!`)
  return name
}

export const generateNumber = () => {
  const number = Math.random()
  return Math.floor(number * 100 + 1)
}

export const checkAnswer = (answer, correctAnswer, userName) => {
  if (answer === correctAnswer) {
    console.log('Correct!')
    return true
  }
  console.log(`${answer} is wrong answer (. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`)
  return false
}

export const runGame = (gameIntro, executeRules) => {
  const name = greetUser()

  console.log(gameIntro)
  for (let i = 0; i < 3; i += 1) {
    const { answer, correctAnswer } = executeRules()
    const result = checkAnswer(answer, correctAnswer, name)
    if (result === false) {
      return
    }  
  }

  console.log(`Congratulations, ${name}!`)
}