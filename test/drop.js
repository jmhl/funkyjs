'use strict';

var chai = require('chai');
var expect = chai.expect;
var drop = require('../drop');

describe('drop', function() {
  it('throws an error when not used with an array', function() {
  });

  it('drops the first n elements from an array', function() {
    var arr = [1, 2, 3, 4, 5, 6];
    var result = [3, 4, 5, 6];

    expect(drop(2, arr)).to.deep.equal(result);
  });

  it('curries the function when only given a number', function() {
    var arr = [1, 2, 3, 4, 5, 6];
    var result = [3, 4, 5, 6];
    var dropTwo = drop(2);

    expect(dropTwo(arr)).to.deep.equal(result);
  });
});

