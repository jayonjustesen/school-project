function getRandomCode() {
  let rand = Math.floor(Math.random() * 10);
  if (rand < 5) {
    return "console.log('Hello World!');";
  } else {
    return "document.getElementById('my-div').style.display = 'none';";
  }
}
