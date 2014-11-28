'use strict';

var chai    = require('chai');
var expect  = chai.expect;
var funky   = require('../funky');
var copy    = funky.copy;

describe('copy', function() {
  it('should throw an error if passed anything other than an object or an array', function() {
    expect(function() {
      copy('');
    }).to.throw(TypeError);
  });

  it('should copy a simple array', function() {
    var arr = [1, 2, 3];

    expect(copy(arr)).to.deep.equal([1, 2, 3]);
  });

  it('should copy a simple object', function() {
    var obj = { 'one': 1, 'two': 2 };
    var result = { 'one': 1, 'two': 2 };

    expect(copy(obj)).to.deep.equal(result);
  });
});

