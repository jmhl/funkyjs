'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var span   = funky.span;
var isEven = funky.isEven;

describe('span', function() {
  var arr;
  var result;
  var spanned;

  before(function() {
    arr = [2, 4, 6, 1, 4, 6, 9, 10];
    result = [[2, 4, 6], [1, 4, 6, 9, 10]];
    spanned = span(isEven, arr);
  });

  it('should return an array of length two', function() {
    expect(spanned.length).to.equal(2);
  });

  it('should return an empty array when one subarray has no matches', function() {
    var arr1 = [2, 4, 6];

    expect(span(isEven, arr1)[1].length).to.equal(0);
  });

  it('should return the appropriate length for each subarray', function() {
    expect(spanned[0].length).to.equal(3);
    expect(spanned[1].length).to.equal(5);
  });

  it('should return the desired result', function() {
    expect(spanned).to.deep.equal(result);
  });

  it('should curry the function', function() {
    var spanEvens = span(isEven);

    expect(spanEvens(arr)).to.deep.equal(result);
  });
});
