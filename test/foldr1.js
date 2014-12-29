'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var foldr1 = funky.foldr1;
var add    = funky.add;
var div    = funky.div;

describe('foldr1', function() {
  it('should perform a right fold on the array', function() {
    var arr = [1,2,3];
    var folded = foldr1(add, arr);

    expect(folded).to.equal(6);
  });

  it('should work when the function depends on a non-zero first element', function() {
    var arr = [2, 2, 8];
    var folded = foldr1(div, arr);

    expect(folded).to.equal(2);
  });
});
