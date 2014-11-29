'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var sub    = funky.sub;

describe('sub', function() {
  it('should perform simple subtraction', function() {
    expect(sub(5, 2)).to.equal(3);
  });
});
