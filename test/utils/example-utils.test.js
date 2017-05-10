const { assert } = require('chai');

const { sum } = require('../../src/utils/example-utils');

describe('Example Utils', function() {
  it('returns the correct sum', function() {
    const sum1 = sum(1, 2);
    const sum2 = sum(3, 2);

    assert.equal(sum1, 3);
    assert.equal(sum2, 5);
  });
});
