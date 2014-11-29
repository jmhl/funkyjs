'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var sqrt   = funky.sqrt;

describe('sqrt', function() {
  it('should return the square root of a number', function() {
    expect(sqrt(4)).to.equal(2);
  });
});
