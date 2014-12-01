'use strict';

var chai     = require('chai');
var expect   = chai.expect;
var funky    = require('../funky');
var isString = funky.isString;

describe('isString', function() {
  it('returns true when given a string', function() {
    expect(isString('test')).to.be.true;
    expect(isString('')).to.be.true;
  });

  it('returns false when given anything but a string', function() {
    expect(isString(2)).to.be.false;
    expect(isString(NaN)).to.be.false;
    expect(isString(null)).to.be.false;
    expect(isString(undefined)).to.be.false;
    expect(isString([])).to.be.false;
    expect(isString({})).to.be.false;
  });
});
