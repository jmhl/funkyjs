'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var foldr1 = funky.foldr1;
var add    = funky.add;

describe('foldr1', function() {
  it('should perform a right fold on the array', function() {
    var arr = [1,2,3];
    var folded = foldr1(add, arr);

    expect(folded).to.equal(6);
  });
});
