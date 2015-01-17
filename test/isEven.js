'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var isEven = funky.isEven;

describe('isEven', function() {
  it('should return true when the number is odd', function() {
    expect(isEven(6)).to.be.true();
  });

  it('should return false when the number is even', function() {
    expect(isEven(5)).to.be.false();
  });
});
