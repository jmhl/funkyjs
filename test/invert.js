'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var invert = funky.invert;

describe('invert', function() {
  it('throws an error if called on an incompatible type', function() {
    expect(function() {
      invert([]);
    }).to.throw(TypeError);
  });

  it('should invert an object', function() {
    var obj = {
      'one': 1,
      'two': 2,
      'three': 3,
      'four': 4
    };

    var result = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four'
    };

    expect(invert(obj)).to.deep.equal(result);
  });
});
