'use strict';

var chai      = require('chai');
var expect    = chai.expect;
var funky     = require('../funky');
var transpose = funky.transpose; 

describe('transpose', function() {
  it('should throw an error when not given an array', function() {
    expect(function() {
      transpose({});
    }).to.throw(TypeError);
  });

  it('should transpose the array of arrays', function() {
    var arr = [[1, 2], [3, 4], [5, 6]];
    var res = [[1, 3, 5], [2, 4, 6]];

    expect(transpose(arr)).to.deep.equal(res);
  });
});
