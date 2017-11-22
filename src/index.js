import readlineSync from 'readline-sync';

const runIntruductionForUser = (textForGame) => {
  console.log('Welcome to the Brain Games!');
  if (textForGame) {
    console.log(`${textForGame}\n`);
  }
  const name = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${name}\n`);
  return name;
};

const getRandomNumber = () => Math.round(Math.random() * 100);

const checkUserAnswer = (questionState, correctAnswer, userName, currentNumberOfTries) => {
  let gameSession = true;
  console.log(`Question: ${questionState}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    if (currentNumberOfTries === 3) {
      console.log(`Congratulations, ${userName}!`);
      gameSession = false;
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.Let's try again, ${userName}!`);
    gameSession = false;
  }
  return gameSession;
};

export { runIntruductionForUser, checkUserAnswer, getRandomNumber };
