import { checkUserAnswer } from '..';

const getRandomNumber = () => Math.round(Math.random() * 100);

const computeCorrectAnswer = (randomNumberForQuestion) => {
  const randomNumber = randomNumberForQuestion.toString();
  const randomNumberInArray = randomNumber.split('');
  const intRandomNumber = randomNumberInArray.map(el => Number(el));
  if (randomNumber.length === 1) {
    return randomNumber;
  }

  const iter = () => {
    intRandomNumber.sort((a, b) => a - b);
    for (let index = 0; index < intRandomNumber.length; index += 1) {
      if (intRandomNumber[index] - intRandomNumber[index + 1] < -1) {
        const max = Math.max(...intRandomNumber);
        const min = Math.min(...intRandomNumber);
        const indexOfMinValue = intRandomNumber.indexOf(min);
        const indexOfMaxValue = intRandomNumber.indexOf(max);
        intRandomNumber[indexOfMinValue] += 1;
        intRandomNumber[indexOfMaxValue] -= 1;
        iter();
      }
    }
    return intRandomNumber.map(el => el.toString()).join('');
  };
  return iter();
};

export default () => {
  const intruductionForUser = 'Balance the given number.';
  checkUserAnswer(getRandomNumber, computeCorrectAnswer, intruductionForUser);
};
