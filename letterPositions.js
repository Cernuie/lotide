const eqArrays = function(first, second) {
  //first check length
  if (first.length === second.length) {
    // then check each element equal to each other
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertArraysEqual = function(first, second) {
  //check if arrays are equal or not
  if (eqArrays(first, second)) {
    console.log(`✅ Assertion passed: [${first}] === [${second}]`);
  } else {
    console.log(`❌ Assertion failed: [${first}] !== [${second}]`);
  }
};

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

assertArraysEqual(letterPositions("hello").e, [1]);