'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var foldr  = funky.foldr;
var add    = funky.add;

describe('foldr', function() {
  it('should perform a right fold on the array', function() {
    var arr = [1,2,3];
    var folded = foldr(add, 0, arr);

    expect(folded).to.equal(6);
  });

  it('should work for non-zero accumulators', function() {
    var arr = [1,2,3];
    var folded = foldr(add, 10, arr);

    expect(folded).to.equal(16);
  });
});
