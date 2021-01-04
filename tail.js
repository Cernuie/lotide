const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  if (array.length < 1) {
    const empArray = [];
    return empArray;
  } else {
    const modArray = array.slice(1);
    return modArray;
  }
};

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Checking if it works for numbers
const result2 = tail([1,2,3]);
assertEqual(result2.length, 2);
assertEqual(result2[0], 2);
assertEqual(result2[1], 3);

//Test Case 3,4: Checking if it works for empty array and array with one element.
//The way we test this is by making sure there's 0 elements in the array, thus an empty array.
const result3 = tail([]);
assertEqual(result3.length, 0);

const result4 = tail([1]);
assertEqual(result4.length, 0);