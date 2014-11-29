'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var mult   = funky.mult;

describe('mult', function() {
  it('should perform simple multiplication', function() {
    expect(mult(2, 3)).to.equal(6);
  });

  it('should curry the function when passed one paramter', function() {
    var multBy2 = mult(2);

    expect(multBy2(3)).to.equal(6);
  });
});
