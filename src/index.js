import readlineSync from 'readline-sync';

const print = (textForGame) => {
  console.log('Welcome to the Brain Games!');
  if (textForGame) {
    console.log(`${textForGame}\n`);
  }
  const name = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${name}\n`);
  return name;
};

const getRandomNumber = () => Math.round(Math.random() * 100);

const playGame = () => {
  const name = print('Answer "yes" if number even otherwise answer "no".');
  let game = true;
  let numberOfTries = 0;

  while (game) {
    numberOfTries += 1;
    const randomNumber = getRandomNumber();
    const even = (randomNumber % 2) === 0 ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes' && even === 'yes') || (answer === 'no' && even === 'no')) {
      console.log('Correct!');
      if (numberOfTries === 3) {
        console.log(`Congratulations, ${name}!`);
        game = false;
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${even}'.Let's try again, ${name}!`);
      game = false;
    }
  }
};
export { print, playGame };
