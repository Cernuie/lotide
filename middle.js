const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle