import { checkUserAnswer } from '..';

const getTwoRandomNumbers = () => {
  const leftLiteral = Math.round(Math.random() * 100);
  const rightLiteral = Math.round(Math.random() * 100);
  const space = ' ';
  return leftLiteral.toString() + space + rightLiteral.toString();
};

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  if (a === 0) {
    return b;
  }
  return findGcd(b, a % b);
};

const computeСorrectResult = (randomExpression) => {
  const randomNumbers = randomExpression.split(' ');
  const result = findGcd(randomNumbers[0], randomNumbers[1]);
  return result.toString();
};

const questionAnswerGenerator = () => {
  const randomNumbers = getTwoRandomNumbers();
  const result = computeСorrectResult(randomNumbers);
  return [randomNumbers, result];
};

export default () => {
  const intruductionForUser = 'Find the greatest common divisor of given numbers.';
  checkUserAnswer(questionAnswerGenerator, intruductionForUser);
};
