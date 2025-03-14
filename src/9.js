const generateRandomCode = () => {
  const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let code = '';

  for (let i = 0; i < 6; i++) {
    code += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }

  return code;
};
