'use strict';

var chai      = require('chai');
var expect    = chai.expect;
var funky     = require('../funky');
var takeWhile = funky.takeWhile;
var isEven    = funky.isEven;

describe('takeWhile', function() {
  var arr;
  var result;

  before(function() {
    arr = [2, 4, 6, 7, 8, 10, 11];
    result = [2, 4, 6];
  });

  it('should throw an error if it does not take a predicate function', function() {
    expect(function() {
      takeWhile(arr);
    }).to.throw(TypeError);
  });

  it('should take the elements in the array until the predicate function fails', function() {
    var taken = takeWhile(isEven, arr);

    expect(taken).to.deep.equal(result);
  });

  it('should curry the function', function() {
    var takeWhileEven = takeWhile(isEven);

    expect(takeWhileEven(arr)).to.deep.equal(result);
  });
});
