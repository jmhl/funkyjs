'use strict';

var chai    = require('chai');
var expect  = chai.expect;
var funky   = require('../funky');
var isArray = funky.isArray;

describe('isArray', function() {
  it('should return true when passed an array', function() {
    expect(isArray([])).to.be.true;
  });

  it('returns false when passed anything but a boolean', function() {
    expect(isArray('')).to.be.false;
    expect(isArray(null)).to.be.false;
    expect(isArray(undefined)).to.be.false;
    expect(isArray(NaN)).to.be.false;
    expect(isArray(true)).to.be.false;
    expect(isArray({})).to.be.false;
    expect(isArray(1)).to.be.false;
  });
});
