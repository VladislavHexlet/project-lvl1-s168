/* eslint no-eval: 0 */
import { checkUserAnswer } from '..';

const getRandomExpression = () => {
  const leftLiteral = Math.round(Math.random() * 100);
  const rightLiteral = Math.round(Math.random() * 100);
  const arrOperators = [' - ', ' + ', ' * '];
  const operator = arrOperators[Math.floor(Math.random() * arrOperators.length)];
  return leftLiteral.toString() + operator + rightLiteral.toString();
};

const computeСorrectResult = (randomExpression) => {
  const result = eval(randomExpression).toString();
  return result;
};

export default () => {
  const IntruductionForUser = 'What is the result of the expression?';
  return checkUserAnswer(getRandomExpression, computeСorrectResult, IntruductionForUser);
};
