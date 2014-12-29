'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var foldl1 = funky.foldl1;
var add    = funky.add;

describe('foldl1', function() {
  it('should perform a right fold on the array', function() {
    var arr = [1,2,3];
    var folded = foldl1(add, arr);

    expect(folded).to.equal(6);
  });
});
