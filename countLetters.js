const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let stringObject = {};
  for (let letter in string) {
    if (string[letter] !== ' ') {
      if (stringObject[string[letter]]) {
        stringObject[string[letter]] += 1;
      } else {
        stringObject[string[letter]] = 1;
      }
    }
  }
  return stringObject;
};


//i dont want to assertEqual to all of the keys in the output >:(
console.log(countLetters("lighthouse is cool 123"));