'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var slice  = funky.slice; 

describe('slice', function() {
  it('should return the desired range of a string', function() {
    var str = 'hello there';

    expect(slice(str, 2, 3)).to.equal('llo');
  });

  it('should return the desired range of an array', function() {
    var arr = [1, 2, 3, 4, 5, 6];
    var result = [3, 4, 5];

    expect(slice(arr, 2, 3)).to.deep.equal(result);
  });

  it('should assume the full length of the string when not given a length', function() {
    var str = 'hello there';

    expect(slice(str, 2)).to.equal('llo there');
  });
});
