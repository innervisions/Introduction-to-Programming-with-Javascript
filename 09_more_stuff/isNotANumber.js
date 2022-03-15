function isNotANumber(value) {
  return value !== value;
}

console.log(isNotANumber(NaN));
console.log(isNotANumber('Hello'));
console.log(isNotANumber(undefined));
console.log(isNotANumber(14));
