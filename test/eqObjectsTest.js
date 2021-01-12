const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe('#eqObjects.js', () => {
  it('should return true given two objects with same key-value pairs but in different orders', () => {
    assert.strictEqual(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  });

  it('should return false with two not similar objects', () => {
    assert.strictEqual(eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }), false);
  });

  it('should return true given two objects with an array in them', () => {
    assert.strictEqual(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
  });
  it('should return false if two arrays in objects do not match', () => {
    assert.strictEqual(eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }), false);
  });
});
