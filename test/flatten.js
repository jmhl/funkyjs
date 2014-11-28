'use strict';

var chai = require('chai');
var expect = chai.expect;
var flatten = require('../flatten');

describe('flatten', function() {
  it('should throw an error when not given a list', function() {
    expect(function() {
      flatten('');
    }).to.throw(TypeError);
  });

  it('flattens a multidimensional array', function() {
    var arr = [1, 2, [3, 4], 5, [6, 7, 8]];
    var result = [1, 2, 3, 4, 5, 6, 7, 8];

    expect(flatten(arr)).to.deep.equal(result);
  });

  it('flattens a nested multidimensional array', function() {
    var arr = [1, 2, [3, 4], 5, [6, [7, 8]]];
    var result = [1, 2, 3, 4, 5, 6, 7, 8];

    expect(flatten(arr)).to.deep.equal(result);
  });
});
