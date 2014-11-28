'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var range  = funky.range;

describe('range', function() {
  it('should throw an error when one or both arguments are not numbers', function() {
    expect(function() {
      range('1', 10)
    }).to.throw(TypeError);

    expect(function() {
      range(1, '10')
    }).to.throw(TypeError);

    expect(function() {
      range('1', '10')
    }).to.throw(TypeError);
  });

  it('should return a list of numbers (inclusive) from low to high', function() {
    var result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(range(1, 10)).to.deep.equal(result);
  });

  it('should return a list of numbers (inclusive) from high to low', function() {
    var result = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

    expect(range(10, 1)).to.deep.equal(result);
  });

  it('should return the number when the arguments are equal', function() {
    expect(range(10, 10)).to.deep.equal([10]);
  });
});
