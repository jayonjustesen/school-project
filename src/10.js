  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const getRandomNumber = () => {
    return getRandomInt(1, 10);
  };
  
  const getRandomBoolean = () => {
    return Math.random() < 0.5;
  };
  
  const getRandomString = () => {
    const length = getRandomInt(5, 20);
    let result = '';
    for (let i = 0; i < length; i++) {
      result += String.fromCharCode(getRandomInt(97, 122));
    }
    return result;
  };
  
  const getRandomObject = () => {
    const length = getRandomInt(5, 10);
    let obj = {};
    for (let i = 0; i < length; i++) {
      obj[getRandomString()] = getRandomBoolean();
    }
    return obj;
  };