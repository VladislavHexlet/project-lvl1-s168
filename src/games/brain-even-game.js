import { runIntruductionForUser, checkUserAnswer, getRandomNumber } from '..';

export default () => {
  const name = runIntruductionForUser('Answer "yes" if number even otherwise answer "no".');
  let numberOfTries = 0;
  let gameSession = true;

  while (gameSession) {
    numberOfTries += 1;
    const randomNumber = getRandomNumber();
    const even = (randomNumber % 2) === 0 ? 'yes' : 'no';
    gameSession = checkUserAnswer(randomNumber, even, name, numberOfTries);
  }
};
