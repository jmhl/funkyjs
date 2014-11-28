'use strict';

var chai = require('chai');
var expect = chai.expect;
var zip = require('../zip');

describe('zip', function() {
  it('should zip two equal length arrays', function() {
    var list1 = [1, 2, 3];
    var list2 = ['a', 'b', 'c'];
    var result = [[1, 'a'], [2, 'b'], [3, 'c']];

    expect(zip(list1, list2)).to.deep.equal(result);
  });

  it('should zip two unequal length arrays to the size of the shortest length array', function() {
    var list1 = [1, 2, 3];
    var list2 = ['a', 'b', 'c', 'd', 'e', 'f'];
    var result = [[1, 'a'], [2, 'b'], [3, 'c']];

    expect(zip(list1, list2)).to.deep.equal(result);
  });

  it('should zip an object', function() {
    var obj = { 'one': 1, 'two': 2, 'three': 3 };
    var result = [['one', 1], ['two', 2], ['three', 3]];

    expect(zip(obj)).to.deep.equal(result);
  });
});
