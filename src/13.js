const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

const getRandomColor = () => {
  const colors = ["red", "green", "blue"];
  return colors[getRandomNumber() - 1];
};

console.log(getRandomColor());
