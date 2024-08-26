import readlineSync from 'readline-sync';

export function greetUser() {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`)
  return name;
}
  
const generateNumber = () => {
  const number = Math.random();
  return Math.floor(number*100 + 1);
}

const isEven  = (number) => number%2 === 0;

export const main = () => {
  console.log ('Welcome to the Brain Games!');
  const name = greetUser();
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`)
  for (let i = 0; i < 3; i+=1) {
    const number = generateNumber()
  
    console.log(`Question: ${number}`)
    const answer = readlineSync.question(`Your answer: `)

    const correctAnswer = isEven(number) ? 'yes' : 'no';
    
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
