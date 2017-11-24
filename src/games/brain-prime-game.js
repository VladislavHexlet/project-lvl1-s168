import { runGameEngine } from '..';

const getRandomNumber = () => Math.round(Math.random() * 100);

const isPrime = (number) => {
  if (number <= 2) {
    return false;
  }
  const iter = (n) => {
    if (n >= number) {
      return true;
    }
    if ((number % n) === 0) {
      return false;
    }
    return iter(n + 1);
  };
  return iter(2);
};

const questionAnswerGenerator = () => {
  const randomNumber = getRandomNumber();
  const result = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, result];
};

export default () => {
  const intruductionForUser = 'Is this number prime?';
  runGameEngine(questionAnswerGenerator, intruductionForUser);
};
