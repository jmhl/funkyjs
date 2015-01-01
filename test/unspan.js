'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var unspan = funky.unspan;
var isOdd  = funky.isOdd;

describe('unspan', function() {
  var arr;
  var result;
  var unspanned;

  before(function() {
    arr = [2, 4, 6, 1, 4, 6, 9, 10];
    result = [[2, 4, 6], [1, 4, 6, 9, 10]];
    unspanned = unspan(isOdd, arr);
  });

  it('should return an array of length two', function() {
    expect(unspanned.length).to.equal(2);
  });

  it('should return an empty array when one subarray has no matches', function() {
    var arr1 = [2, 4, 6];

    expect(unspan(isOdd, arr1)[1].length).to.equal(0);
  });

  it('should return the appropriate length for each subarray', function() {
    expect(unspanned[0].length).to.equal(3);
    expect(unspanned[1].length).to.equal(5);
  });

  it('should return the desired result', function() {
    expect(spanned).to.deep.equal(result);
  });

  it('should curry the function', function() {
    var unspanEvens = unspan(isOdd);

    expect(unspanEvens(arr)).to.deep.equal(result);
  });
});

