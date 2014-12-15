'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var find   = funky.find;
var isEven = funky.isEven;

describe('find', function() {
  it('should find the element in the list', function() {
    var list = [5, 7, 3, 6, 2, 8];
    var found = find(isEven, list);

    expect(found).to.equal(6);
  });

  it('should find the element in the list', function() {
    var list = [5, 7, 3, 1, 11, 9];
    var found = find(isEven, list);

    expect(found).to.be.undefined();
  });

  it('should curry the function', function() {
    var list = [5, 7, 3, 6, 2, 8];
    var findEven = find(isEven);

    expect(findEven(list)).to.equal(6);
  });
});
