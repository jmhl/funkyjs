'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var last   = funky.last;

describe('last', function() {
  it('returns the first item from an array', function() {
    expect(last([1, 2, 3])).to.equal(3);
  });
});

