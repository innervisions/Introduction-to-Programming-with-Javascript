function oddLengths(array) {
  return array.reduce(function(acc, string) {
    if (string.length % 2 === 1) {
      acc.push(string.length);
    }
    return acc;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
