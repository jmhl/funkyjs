'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var map    = funky.map;
var square = funky.square;

describe('map', function() {
  it('should throw an error if called on an incompatible type', function() {
    var str = 'string';

    expect(function() {
      map(str);
    }).to.throw(TypeError);
  });

  it('should map an array', function() {
    var arr = [1, 2, 3];
    var cb = function(x) { return x + 1; };
    var mapped = map(cb, arr);

    expect(mapped).to.deep.equal([2, 3, 4]);
  });

  it('should point to a different place in memory', function() {
    var arr = [1, 2, 3];
    var cb = function(x) { return x + 1; };
    var mapped = map(cb, arr);
    arr[0] = 4;

    expect(mapped).to.deep.equal([2, 3, 4]);
  });

  it('should map an object', function() {
    var obj = { 'one': 1, 'two': 2 };
    var cb = function(x) { return x * 2; };
    var mapped = map(cb, obj);
    var result = { 'one': 2, 'two': 4 };

    expect(mapped).to.deep.equal(result);
  });

  it('should curry the function', function() {
    var arr = [2, 3, 4];
    var mapSquares = map(square);

    expect(mapSquares(arr)).to.deep.equal([4, 9, 16]);
  });
});
