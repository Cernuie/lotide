const assertEqual = require('./assertEqual')

const tail = function(array) {
  if (array.length < 1) {
    const empArray = [];
    return empArray;
  } else {
    const modArray = array.slice(1);
    return modArray;
  }
};

module.exports = tail;