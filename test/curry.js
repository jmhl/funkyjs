'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var curry  = funky.curry; 

describe('curry', function() {
  it('should throw an error when given no arguments', function() {
    var add = function(a, b) {
      return a + b;
    };

    var addTwo = curry(add);

    expect(function() {
      addTwo();
    }).to.throw(TypeError);
  });

  it('should curry a simple function', function() {
    var add = function(a, b) {
      return a + b;
    };

    var addTwo = curry(add);

    expect(addTwo(1, 2)).to.equal(3);
  });
});
