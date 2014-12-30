'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var scanr  = funky.scanr;
var add    = funky.add;

describe('scanr', function() {
  var arr;
  var result;

  before(function() {
    arr = [3, 5, 2, 1];
    result = [11, 8, 3, 1, 0];
  });

  it('should scan the array starting from the right', function() {
    var scanned = scanr(add, 0, arr);

    expect(scanned).to.deep.equal(result);
  });

  it('should curry the function', function() {
    var scanAdd = scanr(add);

    expect(scanAdd(0, arr)).to.deep.equal(result);
  });
});
