'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var take   = funky.take;

describe('take', function() {
  it('throws an error when not used with an array', function() {
    expect(function() {
      take(2, {});
    }).to.throw(TypeError);
  });

  it('takes the first n elements from an array', function() {
    var arr = [1, 2, 3, 4, 5, 6];
    var result = [1, 2];

    expect(take(2, arr)).to.deep.equal(result);
  });

  it('curries the function when only given a number', function() {
    var arr = [1, 2, 3, 4, 5, 6];
    var result = [1, 2];
    var takeTwo = take(2);

    expect(takeTwo(arr)).to.deep.equal(result);
  });
});
