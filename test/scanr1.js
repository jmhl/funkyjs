'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var scanr1 = funky.scanr1;
var add    = funky.add;

describe('scanr1', function() {
  var arr;
  var result;

  before(function() {
    arr = [3, 5, 2, 1];
    result = [11, 8, 3, 1];
  });

  it('should scan the array starting from the right', function() {
    var scanned = scanr1(add, arr);

    expect(scanned).to.deep.equal(result);
  });

  it('should curry the function', function() {
    var scanAdd = scanr1(add);

    expect(scanAdd(arr)).to.deep.equal(result);
  });
});
