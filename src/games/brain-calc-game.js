import { runGameEngine } from '..';

const getRandomExpression = () => {
  const leftLiteral = Math.round(Math.random() * 100);
  const rightLiteral = Math.round(Math.random() * 100);
  const arrOperators = [' - ', ' + ', ' * '];
  const operator = arrOperators[Math.floor(Math.random() * arrOperators.length)];
  return leftLiteral.toString() + operator + rightLiteral.toString();
};

const runCalculator = (randomExpression) => {
  const splitExpression = randomExpression.split(' ');
  switch (splitExpression[1]) {
    case '+':
      return (Number(splitExpression[0]) + Number(splitExpression[2])).toString();
    case '-':
      return (Number(splitExpression[0]) - Number(splitExpression[2])).toString();
    case '*':
      return (Number(splitExpression[0]) * Number(splitExpression[2])).toString();
    default:
      break;
  }
  return false;
};

const questionAnswerGenerator = () => {
  const randomExpression = getRandomExpression();
  const result = runCalculator(randomExpression);
  return [randomExpression, result];
};

export default () => {
  const intruductionForUser = 'What is the result of the expression?';
  return runGameEngine(questionAnswerGenerator, intruductionForUser);
};
