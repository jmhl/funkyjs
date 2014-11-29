'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var mod    = funky.mod;

describe('mod', function() {
  it('should return modulus', function() {
    expect(mod(5, 3)).to.equal(2);
  });
});
