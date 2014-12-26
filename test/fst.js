'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var fst    = funky.fst;

describe('fst', function() {
  it('should throw an error when a pair is not passed in', function() {
    var arr = [1, 2, 3];

    expect(function() {
      fst(arr);
    }).to.throw(TypeError);
  });

  it('should return the first element in the pair', function() {
    var pair = [1, 2];
    
    expect(fst(pair)).to.equal(1);
  });
});
