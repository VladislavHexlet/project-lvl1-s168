import { runGameEngine } from '..';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const createArithmeticProgression = (startNumber) => {
  const coefOfProgression = getRandomNumber(1, 10);
  const iter = (array, n) => {
    if (n === 10) {
      return array;
    }
    const nextValue = startNumber + (n * coefOfProgression);
    const newArray = array.concat(nextValue);
    return iter(newArray, n + 1);
  };
  return iter([startNumber], 1);
};

const deleteElFromProgression = (progressionArray) => {
  const index = getRandomNumber(0, 10);
  const result = progressionArray[index];
  const resultProgressionArray = progressionArray.slice();
  resultProgressionArray[index] = '..';
  return [result.toString(), resultProgressionArray.join(' ')];
};

const questionAnswerGenerator = () => {
  const randomNumber = getRandomNumber(1, 10);
  const progression = createArithmeticProgression(randomNumber);
  const resultAndProgression = deleteElFromProgression(progression);
  const finalResult = resultAndProgression[0];
  const finalResultProgression = resultAndProgression[1];
  return [finalResultProgression, finalResult];
};

export default () => {
  const intruductionForUser = 'What number is missing in this progression?';
  runGameEngine(questionAnswerGenerator, intruductionForUser);
};
