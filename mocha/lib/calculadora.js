const add = (x, y) => +x + +y;
const resta = (x,y) => -x - -y;
const multiplicacion= (x,y) => +x * +y;
const divicion = (x, y) => +x / +y;

const validateNumbers = (x, y) => {
    if (isNaN(x) || isNaN(y)) {
      return false
    }
    return true
  }
  
module.exports = {add,
resta,
multiplicacion,
divicion,
validateNumbers};

