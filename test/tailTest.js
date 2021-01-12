const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  it('returns 3 for [1,2,3]', () => {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  });
  it('returns Labs for [\'Hello\', \'Lighthouse\', \'Labs\'', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse","Labs"]);
  });
  it('returns empty array if given empty array', () => {
    assert.deepEqual(tail([]), []);
  });
  it('returns [] when given [1]', () => {
    assert.deepEqual(tail([1]), []);
  });
});
