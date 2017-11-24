import { runGameEngine } from '..';

const computeEvenOrNot = (randomNumberForQuestion) => {
  const result = (randomNumberForQuestion % 2) === 0 ? 'yes' : 'no';
  return result;
};

const getRandomNumber = () => Math.round(Math.random() * 100);

const questionAnswerGenerator = () => {
  const randomNumber = getRandomNumber();
  const result = computeEvenOrNot(randomNumber);
  return [randomNumber, result];
};

export default () => {
  const intruductionForUser = 'Answer "yes" if number even otherwise answer "no".';
  runGameEngine(questionAnswerGenerator, intruductionForUser);
};
