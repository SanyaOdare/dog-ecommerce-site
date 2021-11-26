let char = `123abcde.fmnopqlABCDE@FJKLMNOPQRSTUVWXYZ456789stuvwxyz0!#$%&ijkrgh'*+-/=?^_${'`'}{|}~`;

const generateToken = (key) => {
  let token = '';
  for(let i = 0; i < key.length; i=i+2) {
    let index = char.indexOf(key[i]) || char.length / 2;
    let randomIndex = Math.floor(Math.random() * index);
    token += char[randomIndex] + char[index - randomIndex];
  }

  console.log(token, key);
  

  return token;  
}