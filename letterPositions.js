const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  // loop through each letter in sentence
  for (let letter in sentence) {
    // exclude spaces with if statement
    if (sentence[letter] !== ' ') {
      // if letter is already in object:
      if (results[sentence[letter]]) {
        results[sentence[letter]].push(Number(letter));
      // else initialize it into the object
      } else {
        results[sentence[letter]] = [Number(letter)];
      }
    }
  }
  //return results
  return results;
};

module.exports = letterPositions;

//assertArraysEqual(letterPositions("hello this is dog").i, [8,11]);