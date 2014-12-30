'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var scanl  = funky.scanl;
var add    = funky.add;

describe('scanl', function() {
  var arr;
  var result;

  before(function() {
    arr = [3, 5, 2, 1];
    result = [0, 3, 8, 10, 11];
  });

  it('should scan the array starting from the left', function() {
    var scanned = scanl(add, 0, arr);

    expect(scanned).to.deep.equal(result);
  });

  it('should curry the function', function() {
    var scanAdd = scanl(add);

    expect(scanAdd(0, arr)).to.deep.equal(result);
  });
});
