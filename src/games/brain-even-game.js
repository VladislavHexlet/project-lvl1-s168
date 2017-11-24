import { checkUserAnswer } from '..';

const computeCorrectAnswer = (randomNumberForQuestion) => {
  const result = (randomNumberForQuestion % 2) === 0 ? 'yes' : 'no';
  return result;
};

const getRandomNumber = () => Math.round(Math.random() * 100);

export default () => {
  const intruductionForUser = 'Answer "yes" if number even otherwise answer "no".';
  checkUserAnswer(getRandomNumber, computeCorrectAnswer, intruductionForUser);
};
