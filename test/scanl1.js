'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var scanl1 = funky.scanl1;
var add    = funky.add;

describe('scanl1', function() {
  var arr;
  var result;

  before(function() {
    arr = [3, 5, 2, 1];
    result = [3, 8, 10, 11];
  });

  it('should scan the array starting from the left', function() {
    var scanned = scanl1(add, arr);

    expect(scanned).to.deep.equal(result);
  });

  it('should curry the function', function() {
    var scanAdd = scanl1(add);

    expect(scanAdd(arr)).to.deep.equal(result);
  });
});
