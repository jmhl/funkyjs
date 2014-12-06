'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var count  = funky.count; 

describe('count', function() {
  it('should count the number of occurrences of a value in an array', function() {
    var arr = [1, 2, 4, 2];

    expect(count(arr, 2)).to.deep.equal(2);
  });
});
