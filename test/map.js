'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var map    = funky.map;

describe('map', function() {
  it('throws an error if called on an incompatible type', function() {
    var str = 'string';

    expect(function() {
      map(str);
    }).to.throw(TypeError);
  });

  it('should map an array', function() {
    var arr = [1, 2, 3];
    var cb = function(x) { return x + 1; };
    var mapped = map(arr, cb);

    expect(mapped).to.deep.equal([2, 3, 4]);
  });

  it('points to a different place in memory', function() {
    var arr = [1, 2, 3];
    var cb = function(x) { return x + 1; };
    var mapped = map(arr, cb);
    arr[0] = 4;

    expect(mapped).to.deep.equal([2, 3, 4]);
  });

  it('should map an object', function() {
    var obj = { 'one': 1, 'two': 2 };
    var cb = function(x) { return x * 2; };
    var mapped = map(obj, cb);
    var result = { 'one': 2, 'two': 4 };

    expect(mapped).to.deep.equal(result);
  });
});
