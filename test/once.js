'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var once   = funky.once;
var square = funky.square;

describe('once', function() {
  it('should call the function', function() {
    var squareOnce = once(square);

    expect(squareOnce(2)).to.equal(4);
  });

  it('should call the function only once', function() {
    var squareOnce = once(square);

    expect(squareOnce(2)).to.equal(4);
    expect(squareOnce(8)).to.equal(4);
  });
});
