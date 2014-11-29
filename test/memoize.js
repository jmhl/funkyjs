'use strict';

var chai    = require('chai');
var expect  = chai.expect;
var funky   = require('../funky');
var memoize = funky.memoize; 

describe('memoize', function() {
  var numberOfCalls;
  var trackedAdd;

  beforeEach(function() {
    numberOfCalls = 0;
    trackedAdd = function(a, b) {
      numberOfCalls += 1;
      return a + b;
    };
  });

  it('should throw an error if passed anything other than a function', function() {
    expect(function() {
      memoize({});
    }).to.throw(TypeError);
  });

  it('should only call a function once', function() {
    var memoTrackedAdd = memoize(trackedAdd);
    
    expect(memoTrackedAdd(1, 2)).to.equal(3);
    expect(memoTrackedAdd(1, 2)).to.equal(3);
    expect(numberOfCalls).to.equal(1);
  });

  it('should call the function again when the result is not cached', function() {
    var memoTrackedAdd = memoize(trackedAdd);
    
    expect(memoTrackedAdd(1, 2)).to.equal(3);
    expect(memoTrackedAdd(1, 2)).to.equal(3);
    expect(memoTrackedAdd(2, 3)).to.equal(5);
    expect(numberOfCalls).to.equal(2);
  });
});
