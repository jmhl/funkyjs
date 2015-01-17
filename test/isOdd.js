'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var isOdd  = funky.isOdd;

describe('isOdd', function() {
  it('should return true when the number is odd', function() {
    expect(isOdd(3)).to.be.true();
  });

  it('should return false when the number is even', function() {
    expect(isOdd(4)).to.be.false();
  });
});
