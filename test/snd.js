'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var snd    = funky.snd;

describe('snd', function() {
  it('should throw an error when a pair is not passed in', function() {
    var arr = [1, 2, 3];

    expect(function() {
      snd(arr);
    }).to.throw(TypeError);
  });

  it('should return the second element in the pair', function() {
    var pair = [1, 2];
    
    expect(snd(pair)).to.equal(2);
  });
});
