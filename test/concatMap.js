'use strict';

var chai      = require('chai');
var expect    = chai.expect;
var funky     = require('../funky');
var concatMap = funky.concatMap;

describe('concatMap', function() {
  it('should map a list and concatenate the result', function() {
    var arr = [1, 2, 3, 4, 5, 6];

    function test(x) {
      return x % 2 ? [ x - 0.1, x, x + 0.1 ] : [];
    }

    var result = [0.9, 1, 1.1, 2.9, 3, 3.1, 4.9, 5, 5.1];

    expect(concatMap(test, arr)).to.deep.equal(result);
  });
});
