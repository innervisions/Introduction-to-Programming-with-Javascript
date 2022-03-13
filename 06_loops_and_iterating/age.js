let rlSync = require('readline-sync');
let age = parseInt(rlSync.question('What is your age?: '));
console.log(`You are ${age} years old,`);
for (let gap = 10; gap <= 40; gap += 10) {
  console.log(`In ${gap} years you will be ${age + gap} years old.`);
}

