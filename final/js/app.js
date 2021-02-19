const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess;
let message;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

for (let i = 1; i <= 10; i++) {
  guess = prompt('Enter your guess number: ');
  if (parseInt(guess) === randomNumber) {
    message = `It took you ${i} tries to guess correct number ${randomNumber}.`;
    break;
  } else {
    message = `You did not guess the number. It was ${randomNumber}`;
  }
}

main.innerHTML = `<h1>${message}</h1>`;