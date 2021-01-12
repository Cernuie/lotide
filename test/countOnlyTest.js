const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe('#countOnly.js', () => {
  it('should return 1 when passed Jason', () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it('should return undefined when passed a name not in the array', () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
  it('should return 2 when given a name of which there are two in a list', () => {
    assert.strictEqual(result1["Fang"], 2);
  });
  it('should return undefined when given a name where the value of the key is false', () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});