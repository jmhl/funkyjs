'use strict';

var chai = require('chai');
var expect = chai.expect;
var isFunction = require('../is_function');

describe('detect', function() {
  it('returns true when passed a function', function() {
    expect(isFunction(function() {})).to.be.true;
  });

  it('returns false when passed anything but a function', function() {
    expect(isFunction('')).to.be.false;
    expect(isFunction(null)).to.be.false;
    expect(isFunction(undefined)).to.be.false;
    expect(isFunction(NaN)).to.be.false;
    expect(isFunction([])).to.be.false;
    expect(isFunction({})).to.be.false;
    expect(isFunction(1)).to.be.false;
  });
});
