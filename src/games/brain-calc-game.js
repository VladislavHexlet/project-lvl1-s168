import { checkUserAnswer } from '..';

const getRandomExpression = () => {
  const leftLiteral = Math.round(Math.random() * 100);
  const rightLiteral = Math.round(Math.random() * 100);
  const arrOperators = [' - ', ' + ', ' * '];
  const operator = arrOperators[Math.floor(Math.random() * arrOperators.length)];
  return leftLiteral.toString() + operator + rightLiteral.toString();
};

const computeСorrectResult = (randomExpression) => {
  const splitedExpression = randomExpression.split(' ');
  let result;
  if (splitedExpression[1] === '+') {
    result = Number(splitedExpression[0]) + Number(splitedExpression[2]);
  }
  if (splitedExpression[1] === '-') {
    result = Number(splitedExpression[0]) - Number(splitedExpression[2]);
  }
  if (splitedExpression[1] === '*') {
    result = Number(splitedExpression[0]) * Number(splitedExpression[2]);
  }
  return result.toString();
};

export default () => {
  const IntruductionForUser = 'What is the result of the expression?';
  return checkUserAnswer(getRandomExpression, computeСorrectResult, IntruductionForUser);
};
