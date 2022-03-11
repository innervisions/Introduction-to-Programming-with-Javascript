function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('error: not an integer');
    return;
  }

  message = number % 2 == 0 ? 'even' : 'odd';
  console.log(message);
}

evenOrOdd(0);
evenOrOdd(1);
evenOrOdd(-4);
evenOrOdd(4.5);
evenOrOdd(14.0);
