const getRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const getRandomBool = () => {
  const bool = Math.round(Math.random());
  return bool === 0 ? false : true;
};

const getRandomArray = (length) => {
  const arr = [];
  for (let i = 1; i <= length; i++) {
    arr.push(getRandomNumber());
  }
  return arr;
};
