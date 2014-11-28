'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var divmod = funky.divmod; 

describe('divmod', function() {
  it('should return an array of quotient and modulus', function() {
    var result = [3, 2];

    expect(divmod(11, 3)).to.deep.equal(result);
  });

  it('should return a modulus of floating point accuracy', function() {
    var result1 = [3, 0.5];
    var result2 = [3, 1];

    expect(divmod(11, 3.5)).to.deep.equal(result1);
    expect(divmod(11.5, 3.5)).to.deep.equal(result2);
  });

  it('should work correctly for negative numbers', function() {
    var result1 = [-4, -1];
    var result2 = [-4, 3];

    expect(divmod(11, -3)).to.deep.equal(result1);
    expect(divmod(-11, 3.5)).to.deep.equal(result2);
  });
});
