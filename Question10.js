#!/usr/bin/env node

const checkDivisibleBy = (number, digit) => (number/digit === Math.floor(number/digit));

const checkContains = (number, digit) => `${number}`.includes(digit);

for (let number = 1; number <= 100; number++) {
  const divisibleByOrContainsThree = (checkDivisibleBy(number, 3) || checkContains(number, 3)),
        divisibleByOrContainsFive = (checkDivisibleBy(number, 5) || checkContains(number, 5));

  if (divisibleByOrContainsThree && divisibleByOrContainsFive) {
    console.log('Fizz Buzz');
  } else if (divisibleByOrContainsThree) {
    console.log('Fizz');
  } else if (divisibleByOrContainsFive) {
    console.log('Buzz');
  } else {
    console.log(number);
  }
}
