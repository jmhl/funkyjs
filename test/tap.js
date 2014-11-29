'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var tap    = funky.tap;
var square = funky.square;

describe('tap', function() {
  it('should tap into the control flow', function() {
    var tapped;
    var tappedResult = 121;

    tap(function(a) {
      tapped = square(a);
    }, 11);
    
    expect(tapped).to.deep.equal(tappedResult);
  });

  it('should return the argument back into the flow', function() {
    var result = tap(function(a) {
      square(a)
    }, 11);
    
    expect(result).to.equal(11);
  });

  it('should curry the function', function() {
    var tapped;
    var tappedResult = 121;
    var tapSquare = tap(function(a) {
      tapped = square(a);
    });
    var result = tapSquare(11);

    expect(tapped).to.deep.equal(tappedResult);
    expect(result).to.equal(11);
  });
});
