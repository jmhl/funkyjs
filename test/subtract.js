'use strict';

var chai     = require('chai');
var expect   = chai.expect;
var funky    = require('../funky');
var subtract = funky.subtract;

describe('subtract', function() {
  it('should perform simple subtraction', function() {
    expect(subtract(5, 2)).to.equal(3);
  });
});
