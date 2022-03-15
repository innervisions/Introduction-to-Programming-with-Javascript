function isNegativeZero(value) {
  return (value === 0) && (1 / value === -Infinity);
}

console.log(isNegativeZero(10));
console.log(isNegativeZero(0));
console.log(isNegativeZero('hello'));
console.log(isNegativeZero(-0));
