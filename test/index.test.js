import add from '../src/index.js';
import { assert } from 'chai';

describe('add function', () => {
  it('should return the sum of two numbers', () => {
    const result = add(1, 2);
    assert.equal(result, 3);
  });
});