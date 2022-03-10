function getNumber(prompt) {
  let rlSync = require('readline-sync')
  number = rlSync.question(prompt);
  return number;
}

function multiply(left, right) {
  return left * right;
}

left = getNumber('Enter the first number: ');
right = getNumber('Enter the second number: ');
product = multiply(left, right);
console.log(`${left} * ${right} = ${product}`);
