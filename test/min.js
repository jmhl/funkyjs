'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var min    = funky.min;

describe('min', function() {
  it('should return the smaller of two numbers', function() {
    expect(min(5, 3)).to.equal(3);
    expect(min(2, 3)).to.equal(2);
  });
});
