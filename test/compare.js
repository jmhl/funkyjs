'use strict';

var chai    = require('chai');
var expect  = chai.expect;
var funky   = require('../funky');
var compare = funky.compare;

describe('compare', function() {
  it('should return true when the compared objects properties are equal', function() {
    var obj1 = { 'one': 1, 'two': 2 };
    var obj2 = { 'zero': 0, 'two': 2 };

    expect(compare('two', obj1, obj2)).to.be.true();
  });

  it('should return false when the compared objects properties are not equal', function() {
    var obj1 = { 'one': 1, 'two': 2 };
    var obj2 = { 'zero': 0, 'two': 3 };

    expect(compare('two', obj1, obj2)).to.be.false();

  });

  it('should return false when both objects to not share the property', function() {
    var obj1 = { 'one': 1, 'two': 2 };
    var obj2 = { 'zero': 0, 'three': 3 };

    expect(compare('two', obj1, obj2)).to.be.false();
  });
});
