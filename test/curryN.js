'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var curryN = funky.curryN;

describe('curryN', function() {
  var addThree;
  var curriedAddThree;

  before(function() {
    addThree = function(a, b, c) {
      return a + b + c;
    };

    curriedAddThree = curryN(3, addThree);
  });

  it('should throw an error when given no arguments', function() {
    expect(function() {
      var incCurryAddThree = curryN();
    }).to.throw(TypeError);
  });

  it('should throw an error when passed no function', function() {
    expect(function() {
      var incCurryAddThree = curryN(3);
    }).to.throw(TypeError);
  });

  it('should throw an error when passed a function but no numArgs', function() {
    expect(function() {
      var incCurryAddThree = curryN(addThree);
    }).to.throw(TypeError);
  });

  it('should throw an error when the curried function is given no arguments', function() {
    expect(function() {
      curriedAddThree();
    }).to.throw(TypeError);
  });

  it('should curry n arguments to a function', function() {
    var f = curriedAddThree(1, 2);

    expect(f(3)).to.equal(6);
  });
});
