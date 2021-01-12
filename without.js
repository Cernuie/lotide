const without = function(input, exclusion) {
  /* this code doesnt work ): will revist later ?
  
  let returnedArray = input
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < exclusion.length; j++) {
      if (input[i] === exclusion[j]) {
        returnedArray.splice(i,1);
        break;
      }
    }
  }
  return returnedArray
  
  */
  for (let i = 0; i < exclusion.length; i++) {
    let index = input.indexOf(exclusion[i]);
    if (index > -1) {
      input.splice(index, 1);
    }
  }
  return input;
};

module.exports = without

/* tests
console.log(without([1, 2, 3], [3])); 
console.log(without(["1", "2", "3"], [1, "2", "3"]));
console.log(without(["dog", "cat"], ["dog"]));
*/