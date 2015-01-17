'use strict';

var chai      = require('chai');
var expect    = chai.expect;
var funky     = require('../funky');
var partition = funky.partition;
var isEven    = funky.isEven;

describe('partition', function() {
  it('should throw an error if called on an incompatible type', function() {
    expect(function() {
      partition(isEven, {});
    }).to.throw(TypeError);
  });

  it('should partition an array', function() {
    var arr = [0, 1, 2, 3, 4, 5];
    var res = [[0, 2, 4], [1, 3, 5]];

    expect(partition(isEven, arr)).to.deep.equal(res);
  });

  it('should curry the function', function() {
    var arr = [0, 1, 2, 3, 4, 5];
    var res = [[0, 2, 4], [1, 3, 5]];
    var partitionEvens = partition(isEven);

    expect(partitionEvens(arr)).to.deep.equal(res);
  });
});
