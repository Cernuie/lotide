const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let key in object) { //loop through keys in object
    if (callback(object[key])) { //if callback fn returns truthy
      return key; //return key, else
    }
  }
  return undefined; //return undef
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)
, "noma");

assertEqual(findKey({
  "1": {number: 1},
  "2": {number: 2},
  "3": {number: 3}
}, x => x.number % 3 === 0), "3");