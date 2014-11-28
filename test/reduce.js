'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var reduce = funky.reduce;

describe('reduce', function() {
  it('should reduce an array of numbers', function() {
    var nums = [1, 2, 3];

    expect(reduce(add, 10, nums)).to.equal(16);
  });

  it('should reduce an array of letters', function() {
    var letters = ['a', 'b', 'c'];

    expect(reduce(add, '', letters)).to.equal('abc');
  });
});

function add(a, b) {
  return a + b;
}
