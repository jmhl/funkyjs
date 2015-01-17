'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var len    = funky.len;

describe('len', function() {
  it('should throw an error if called on an incompatible type', function() {
    expect(function() {
      len(12);
    }).to.throw(TypeError);
  });

  it('should return the length of an array', function() {
    var arr = [1, 2, 3];

    expect(len(arr)).to.equal(3);
  });

  it('should return the length of a string', function() {
    var str = 'test';

    expect(len(str)).to.equal(4);
  });

  it('should return the length of an object', function() {
    var obj = { 'one': 1, 'two': 2 };

    expect(len(obj)).to.equal(2);
  });
});
