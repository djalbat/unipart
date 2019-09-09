#!/usr/bin/env node

const fs = require('fs');

const fileName = process.argv[2],
      contents = fs.readFileSync(fileName, 'utf8'),
      lines = contents.split('\n'),
      numbers = lines.map((line) => Number(line)),
      map = numbers.reduce((map, number) => {
        let count = (map[number] || 0);

        count++;

        map[number] = count;

        return map;
      }, {}),
      keys = Object.keys(map);

keys.sort((keyA, keyB) => (map[keyB] - map[keyA]));

const sortedNumbers = keys.map((key) => Number(key)),
      firstFiveSortedNumbers = sortedNumbers.slice(0, 5);

console.log(firstFiveSortedNumbers);
