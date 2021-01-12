const eqArrays = require('./eqArrays')

const eqObjects = require('./eqObjects')

const assertObjectsEqual = function(actual, expected) {
  //uses inspect to inspect objects
  //also uses eqObjects to compare the objects and return desired result
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual