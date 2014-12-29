'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var tail   = funky.tail;

describe('tail', function() {
  it('should return the tail of an array', function() {
    var arr = [1, 2, 3];
    var result = [2, 3];

    expect(tail(arr)).to.deep.equal(result);
  });
});
