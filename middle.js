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

const findIndexOfMid = function(array) {
  //return correct index of middle in array
  if (array.length % 2 === 0) {
    return (array.length / 2 - 1);
  } else {
    return Math.floor(array.length / 2);
  }
};

const middle = function(array) {
  //check if array length is less than or equal to 2
  //since you can't have a middle if theres less than 3 elements
  if (array.length < 3) {
    return [];
  }
  //get index of middle
  const index = findIndexOfMid(array);
  //start checking for even/odd length by doing modulo on length
  //then return necessary output
  if (array.length % 2 === 0) {
    return [array[index], array[index + 1]];
  } else {
    return [array[index]];
  }
};

assertArraysEqual([], []);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);
assertArraysEqual(middle(['1','2','3','4','5']), ['3']);