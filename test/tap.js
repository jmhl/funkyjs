'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var tap    = funky.tap;
var divmod = funky.divmod;

describe('tap', function() {
  it('should tap into the control flow', function() {
    var tapped;
    var tappedResult = [3, 2];

    tap(function(a) {
      tapped = divmod(a, 3);
    }, 11);
    
    expect(tapped).to.deep.equal(tappedResult);
  });

  it('should return the argument back into the flow', function() {
    var result = tap(function(a) {
      divmod(a, 3);
    }, 11);
    
    expect(result).to.equal(11);
  });
});
