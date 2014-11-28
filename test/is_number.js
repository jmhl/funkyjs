'use strict';

var chai = require('chai');
var expect = chai.expect;
var isNumber= require('../is_number');

describe('isNumber', function() {
  it('returns true when given a number', function() {
    expect(isNumber(2)).to.be.true;
    expect(isNumber(0)).to.be.true;
  });

  it('returns false when given anything but a number', function() {
    expect(isNumber('2')).to.be.false;
    expect(isNumber(NaN)).to.be.false;
    expect(isNumber(null)).to.be.false;
    expect(isNumber(undefined)).to.be.false;
    expect(isNumber([])).to.be.false;
    expect(isNumber({})).to.be.false;
  });
});
