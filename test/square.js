'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var square = funky.square;

describe('square', function() {
  it('should square a number', function() {
    expect(square(4)).to.equal(16);
  });
});
