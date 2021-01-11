const assertEqual = require('./assertEqual')

const head = function(array) {
  if (array.length < 1) {
    return undefined;
  } else {
    return (array[0]);
  }
};

module.exports = head;