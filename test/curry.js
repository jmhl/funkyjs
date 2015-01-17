'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var curry  = funky.curry; 
var add    = funky.add;

describe('curry', function() {
  var addTwo;
  var curriedAdd;

  before(function() {
    addTwo = curry(add)(2);
    curriedAdd = curry(add);
  });

  it('should throw an error when given no arguments', function() {
    expect(function() {
      curriedAdd();
    }).to.throw(TypeError);
  });

  it('should curry a simple function', function() {
    expect(addTwo(1)).to.equal(3);
  });

  it('should satisfy the default and call a function normally', function() {
    expect(curriedAdd(2, 3)).to.equal(5);
  });
});
