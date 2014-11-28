'use strict';

var chai      = require('chai');
var expect    = chai.expect;
var funky     = require('../funky');
var isBoolean = funky.isBoolean; 


describe('detect', function() {
  it('returns true when passed a boolean', function() {
    expect(isBoolean(true)).to.be.true;
    expect(isBoolean(false)).to.be.true;
  });

  it('returns false when passed anything but a boolean', function() {
    expect(isBoolean('')).to.be.false;
    expect(isBoolean(null)).to.be.false;
    expect(isBoolean(undefined)).to.be.false;
    expect(isBoolean(NaN)).to.be.false;
    expect(isBoolean([])).to.be.false;
    expect(isBoolean({})).to.be.false;
    expect(isBoolean(1)).to.be.false;
  });
});
