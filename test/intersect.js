'use strict';

var chai      = require('chai');
var expect    = chai.expect;
var funky     = require('../funky');
var intersect = funky.intersect;

describe('intersect', function() {
  it('should return the intersecting elements of two arrays', function() {
    var list1 = [1, 1, 3, 5];
    var list2 = [1, 2, 3];
    var result = [1, 3];

    expect(intersect(list1, list2)).to.deep.equal(result);
  });
});
