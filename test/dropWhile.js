'use strict';

var chai      = require('chai');
var expect    = chai.expect;
var funky     = require('../funky');
var dropWhile = funky.dropWhile;
var isEven    = funky.isEven;

describe('dropWhile', function() {
  var arr;
  var result;

  before(function() {
    arr = [2, 4, 6, 7, 8, 10, 11];
    result = [7, 8, 10, 11];
  });

  it('should throw an error if it does not take a predicate function', function() {
    expect(function() {
      dropWhile(arr);
    }).to.throw(TypeError);
  });

  it('should drop the elements in the array until the predicate function fails', function() {
    var taken = dropWhile(isEven, arr);

    expect(taken).to.deep.equal(result);
  });

  it('should curry the function', function() {
    var dropWhileEven = dropWhile(isEven);

    expect(dropWhileEven(arr)).to.deep.equal(result);
  });
});
