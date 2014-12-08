'use strict';

var chai    = require('chai');
var expect  = chai.expect;
var funky   = require('../funky');
var reverse = funky.reverse;

describe('reverse', function() {
  it('should reverse the items in an array', function() {
    var arr = [1, 2, 3];
    var res = [3, 2, 1];

    expect(reverse(arr)).to.deep.equal(res);
  });
});
