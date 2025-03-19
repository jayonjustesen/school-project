function getRandomCode(){
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";

  for(let i=0; i<5; i++){
    const index = Math.floor(Math.random() * possible.length);
    code += possible.substring(index, index+1);
  }

  return code;
}
getRandomCode();