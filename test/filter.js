'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var filter = funky.filter; 

describe('filter', function() {
  it('should throw an error when not given a list', function() {
    expect(function() {
      filter(isEven, {});
    }).to.throw(TypeError);
  });

  it('should return an array of only items that match the condition', function() {
    var nums = [2, 3, 4, 5, 6, 7, 8];
    var result = [2, 4, 6, 8];

    expect(filter(isEven, nums)).to.deep.equal(result);
  });

  it('should curry the function when only passed a condition', function() {
    var nums = [2, 3, 4, 5, 6, 7, 8];
    var result = [2, 4, 6, 8];
    var filterEvens = filter(isEven);

    expect(filterEvens(nums)).to.deep.equal(result);

  });
});

function isEven(x) {
  return x % 2 === 0;
}
