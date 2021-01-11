const eqArrays = require('./eqArrays')

const assertArraysEqual = function(first, second) {
  //check if arrays are equal or not using eqArrays
  if (eqArrays(first, second)) {
    console.log(`✅ Assertion passed: [${first}] === [${second}]`);
  } else {
    console.log(`❌ Assertion failed: [${first}] !== [${second}]`);
  }
};

module.exports = assertArraysEqual;