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

const checkUserAnswer = (fnQuestionState, computeCorrectAnswer, introductionTxt) => {
  const userName = runIntruductionForUser(introductionTxt);

  const iter = (currentNumberOfTries) => {
    const questionState = fnQuestionState();
    const correctAnswer = computeCorrectAnswer(questionState);

    console.log(`Question: ${questionState}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      if (currentNumberOfTries === 3) {
        console.log(`Congratulations, ${userName}!`);
        return true;
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.Let's try again, ${userName}!`);
      return true;
    }
    return iter(currentNumberOfTries + 1);
  };
  iter(1);
};

export { runIntruductionForUser, checkUserAnswer };
