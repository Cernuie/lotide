const assertEqual = require("./assertEqual")
const eqArrays = require("./eqArrays");

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

module.exports = eqObjects