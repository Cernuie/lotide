const without = function(input, exclusion) {
  for (let i = 0; i < exclusion.length; i++) {
    let index = input.indexOf(exclusion[i]);
    if (index > -1) {
      input.splice(index, 1);
    }
  }
  return input;
};

console.log(without([1, 2, 3], [3]));
console.log(without(["1", "2", "3"], [1, "2", "3"]));
console.log(without(["dog", "cat"], ["dog"]));