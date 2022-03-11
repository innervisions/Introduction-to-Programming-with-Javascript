function longCaps(string) {
  return string.length > 10 ? string.toUpperCase() : string;
}

console.log(longCaps('bacon'));
console.log(longCaps('Raymond'));
console.log(longCaps('Raymond Saade'));
