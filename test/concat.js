'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var concat = funky.concat;

describe('concat', function() {
  it('should concatenate two arrays', function() {
    var arr = ['a', 'b', 'c'];
    var res = ['a', 'b', 'c', 'd', 'e'];

    expect(concat(arr, ['d', 'e'])).to.deep.equal(res);
  });

  it('should alter the original array, and not create a new array', function() {
    var arr = ['a', 'b', 'c'];

    expect(concat(arr, ['d', 'e'])).to.deep.equal(arr);
  });
});
