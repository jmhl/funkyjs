'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var max    = funky.max;

describe('max', function() {
  it('should return the larger of two numbers', function() {
    expect(max(5, 3)).to.equal(5);
    expect(max(2, 3)).to.equal(3);
  });
});
