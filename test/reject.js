'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var reject = funky.reject;
var isEven = funky.isEven;

describe('reject', function() {
  var nums;
  var result;

  before(function() {
    nums = [2, 3, 4, 5, 6, 7, 8];
    result = [3, 5, 7];
  });

  it('should throw an error when not given a list', function() {
    expect(function() {
      reject(isEven, {});
    }).to.throw(TypeError);
  });

  it('should return an array of only items that do not match the condition', function() {
    expect(reject(isEven, nums)).to.deep.equal(result);
  });

  it('should curry the function when only passed a condition', function() {
    var rejectEvens = reject(isEven);

    expect(rejectEvens(nums)).to.deep.equal(result);
  });
});
