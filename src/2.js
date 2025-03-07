const colors = ['red', 'blue', 'green'];
const numbers = [1, 2, 3];

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

let randomColor = getRandomElement(colors);
let randomNumber = getRandomElement(numbers);

console.log(`A random color is ${randomColor}.`);
console.log(`A random number is ${randomNumber}.`);
