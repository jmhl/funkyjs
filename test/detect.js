'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var detect = funky.detect; 

describe('detect', function() {
  it('will detect and return the first even item', function() {
    var list = [1, 3, 5, 6, 7, 8, 9];

    expect(detect(isEven, list)).to.equal(6);
  });

  it('returns null if it cannot detect an item that meets the condition', function() {
    var list = [1, 3, 5, 7, 9, 11];

    expect(detect(isEven, list)).to.be.null();
  });

  it('curries the function for a specific condition', function() {
    var oddList = [1, 3, 5, 7, 9, 11];
    var evenList = [1, 3, 5, 7, 8, 9, 11];
    var detectEven = detect(isEven);

    expect(detectEven(oddList)).to.be.null();
    expect(detectEven(evenList)).to.equal(8);
  });
});

function isEven(item) {
  return item % 2 === 0;
}
