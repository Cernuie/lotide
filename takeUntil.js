const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  let result = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    } else {
      result.push(item);
    }
  }
  return result;
};

module.exports = takeUntil;

/* tests

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1,2,5,7,2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

const data3 = [1 , 3, 5, 7, 9, 11, 12, 24, 27, 54];
const results3 = takeUntil(data3, x => x % 2 === 0);
assertArraysEqual(results3, [1,3,5,7,9,11]);

  this is my forEach loop that didn't work because apparently there's no way to break out of it?
  maybe shouldn't break out of it though i could've just returned at that point

  array.forEach(item, callback => {
    if (callback === true) {
      break;
    } else {
      result.push(item)
    }
  })

*/
