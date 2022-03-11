function numberRange(number) {
  let message;
  if (number < 0) {
    message = `${number} is less than 0`;
  } else if (number <= 50) {
    message = `${number} is between 0 an and 50`;
  } else if (number <= 100) {
    message = `${number} is between 50 an and 100`;
  } else {
    message = `${number} is greater than 100`;
  }
  console.log(message);
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
