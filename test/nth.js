'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var nth    = funky.nth;

describe('nth', function() {
  it('should find the nth element in the list', function() {
    var list = [5, 7, 3, 6, 2, 8];

    expect(nth(2, list)).to.equal(3);
  });

  it('should find a negative index from the end of the list', function() {
    var list = [5, 7, 3, 6, 2, 8];
    
    expect(nth(-1, list)).to.equal(8);
  });
});
