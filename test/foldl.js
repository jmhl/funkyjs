'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var foldl  = funky.foldl;
var add    = funky.add;

describe('foldl', function() {
  it('should perform a left fold on the array', function() {
    var arr = [1,2,3];
    var folded = foldl(add, 0, arr);

    expect(folded).to.equal(6);
  });

  it('should work for non-zero accumulators', function() {
    var arr = [1,2,3];
    var folded = foldl(add, 10, arr);

    expect(folded).to.equal(16);
  });
});
