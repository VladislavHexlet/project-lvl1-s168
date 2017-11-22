/* eslint no-eval: 0 */
import { runIntruductionForUser, checkUserAnswer, getRandomNumber } from '..';

const getRandomExpression = () => {
  const leftLiteral = getRandomNumber();
  const rightLiteral = getRandomNumber();
  const arrOperators = [' - ', ' + ', ' * '];
  const operator = arrOperators[Math.floor(Math.random() * arrOperators.length)];
  return leftLiteral.toString() + operator + rightLiteral.toString();
};

export default () => {
  const name = runIntruductionForUser('What is the result of the expression?');
  let numberOfTries = 0;
  let gameSession = true;

  while (gameSession) {
    numberOfTries += 1;
    const randomExpression = getRandomExpression();
    const correctResult = eval(randomExpression).toString();
    gameSession = checkUserAnswer(randomExpression, correctResult, name, numberOfTries);
  }
};
