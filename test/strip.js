'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var strip  = funky.strip; 

describe('strip', function() {
  it('should strip the whitespace from a string', function() {
    var str = 'hello there';

    expect(strip(str)).to.equal('hellothere');
  });

  it('should strip all whitespace from a string', function() {
    var str = 'hello there you\t';

    expect(strip(str)).to.equal('hellothereyou');
  });
});
