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

const eqObjects = function(object1, object2) {
  let firstObjectKeys = Object.keys(object1);
  let secObjectKeys = Object.keys(object2);
  //check if objects have the same amount of keys and same kind of keys using eqArrays and sort()
  if (eqArrays(firstObjectKeys.sort(), secObjectKeys.sort()) === false) {
    return false;
  }
  for (let key in firstObjectKeys) {
    //first check if the key we're looking at is an array.
    if (Array.isArray(object1[firstObjectKeys[key]])) {
      if (eqArrays(object1[firstObjectKeys[key]], object2[firstObjectKeys[key]]) === false) {
        return false;
      }
    //loop through each key in first object and see if they match with the keys in the second
    } else if (object1[firstObjectKeys[key]] !== object2[firstObjectKeys[key]]) {
      return false;
    }
  }
  //if it passes all of the if statements, then they must match
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(ab,ba);
assertObjectsEqual(ab,abc);
assertObjectsEqual(cd,dc);
assertObjectsEqual(cd,cd2);