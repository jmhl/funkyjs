'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var first  = funky.first; 

describe('first', function() {
  it('should return the first item in an array', function() {
    expect(first([1, 2, 3])).to.equal(1);
  });
});
