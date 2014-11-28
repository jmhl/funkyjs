'use strict';

var chai     = require('chai');
var expect   = chai.expect;
var funky    = require('../funky');
var isObject = funky.isObject;

describe('isObject', function() {
  it('returns true when the object is an object literal', function() {
    expect(isObject({})).to.be.true;
  });

  it('returns false when the object is not an object literal', function() {
    expect(isObject(1)).to.be.false;
    expect(isObject('1')).to.be.false;
    expect(isObject([])).to.be.false;
    expect(isObject(null)).to.be.false;
  });
});
