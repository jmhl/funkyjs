'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var union  = funky.union;

describe('union', function() {
  it('should return the union of two arrays', function() {
    var list1 = ['a', 'b', 'c'];
    var list2 = ['d', 'e', 'a'];
    var result = ['a', 'b', 'c', 'd', 'e'];

    expect(union(list1, list2)).to.deep.equal(result);
  });
});
