function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomColor() {
  const red = getRandomInt(256);
  const green = getRandomInt(256);
  const blue = getRandomInt(256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function getRandomItem(arr) {
  return arr[getRandomInt(arr.length)];
}
