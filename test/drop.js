'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var drop   = funky.drop; 

describe('drop', function() {
  it('should throw an error when not used with an array', function() {
    expect(function() {
      drop(2, {});
    }).to.throw(TypeError);
  });

  it('should drop the first n elements from an array', function() {
    var arr = [1, 2, 3, 4, 5, 6];
    var result = [3, 4, 5, 6];

    expect(drop(2, arr)).to.deep.equal(result);
  });

  it('should curry the function when only given a number', function() {
    var arr = [1, 2, 3, 4, 5, 6];
    var result = [3, 4, 5, 6];
    var dropTwo = drop(2);

    expect(dropTwo(arr)).to.deep.equal(result);
  });
});
