import readlineSync from 'readline-sync';

export function greetUser() {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
}
export const generateNumber = () => {
  const number = Math.random();
  return Math.floor(number*100 + 1);
}