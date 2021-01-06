const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed: ${actual} !== ${expected}`);
  }
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
