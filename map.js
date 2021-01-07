const reverseString = function(input) {
  let newstring = "";
  for (let i = input.length - 1; i >= 0; i--) {
    newstring += input[i];
  }
  return newstring;
};

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

const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["abcd", "efgh"];
const numbers = [2,4,6,8];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const results1 = map(words, word => word[0]);
const results2 = map(words, words => words.length);
const results3 = map(words1, words1 => reverseString(words1));
const results4 = map(numbers, numbers => numbers * 3);

assertArraysEqual(results1, ['g','c','t','m','t']);
assertArraysEqual(results2, [6,7,2,5,3]);
assertArraysEqual(results3, ['dcba', 'hgfe']);
assertArraysEqual(results4, [6,12,18,24]);