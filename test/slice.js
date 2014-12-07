'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var slice  = funky.slice; 

describe('slice', function() {
  it('should return the range of a string', function() {
    var str = 'hello there';

    expect(slice(str, 2, 3)).to.equal('llo');
  });

  it('should assume the full length of the string when not given a length', function() {
    var str = 'hello there';

    expect(slice(str, 2)).to.equal('llo there');
  });
});
