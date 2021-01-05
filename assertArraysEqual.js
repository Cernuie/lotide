const eqArrays = function(first, second) {
  //first check length
  if (first.length === second.length) {
    // then check each element equal to each other
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
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
}

assertArraysEqual([1,2], [1,2]);
assertArraysEqual([1,3], [1,2]);
assertArraysEqual(['string1', 'string2'], ['string1', 'string2'])
assertArraysEqual(['string', 'string1'], ['string1', 'string2'])