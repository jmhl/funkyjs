'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var allAs  = funky.allAs;
var isEven = funky.isEven;

describe('allAs', function() {
  it('should return true when all predicates are satisfied', function() {
    var result = allAs([isEven, isLarge], 14);

    expect(result).to.be.true();
  });

  it('should return false when even one predicate is not satisfied', function() {
    var result = allAs([isEven, isLarge], 8);

    expect(result).to.be.false();
  });

  it('should curry the function', function() {
    var isEvenAndIsLarge = allAs([isEven, isLarge]);
    var result1 = isEvenAndIsLarge(18);
    var result2 = isEvenAndIsLarge(5);

    expect(result1).to.be.true();
    expect(result2).to.be.false();
  });
});

function isLarge(num) {
  return num > 10;
}
