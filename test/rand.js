'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var rand   = funky.rand;

describe('rand', function() {
  it('should return a random number, upper bound exclusive', function() {
    for (var i = 0; i < 20; i += 1) {
      expect(rand(0, 5)).to.be.within(0, 4);
    }
  });

  it('should return a random number, upper bound inclusive', function() {
    for (var i = 0; i < 20; i += 1) {
      expect(rand(0, 5, true)).to.be.within(0, 5);
    }
  });
});
