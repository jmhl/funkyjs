'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var uniq   = funky.uniq;

describe('uniq', function() {
  it('should return the unique elements of two arrays', function() {
    var list1 = ['a', 'b', 'c'];
    var list2 = ['c', 'e', 'a'];
    var result = ['b', 'e'];

    expect(uniq(list1, list2)).to.deep.equal(result);
  });
});
