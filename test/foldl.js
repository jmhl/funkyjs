'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var foldl  = funky.foldl;
var add    = funky.add;

describe('foldl', function() {
  var arr;

  before(function() {
    arr = [1, 2, 3];
  });

  it('should perform a left fold on the array', function() {
    var folded = foldl(add, 0, arr);

    expect(folded).to.equal(6);
  });

  it('should work for non-zero accumulators', function() {
    var folded = foldl(add, 10, arr);

    expect(folded).to.equal(16);
  });

  it('should curry the function', function() {
    var foldLeftAdd = foldl(add);

    expect(foldLeftAdd(0, arr)).to.equal(6);
  });
});
