'use strict';

var chai    = require('chai');
var expect  = chai.expect;
var funky   = require('../funky');
var indexOf = funky.indexOf;

describe('groupBy', function() {
  var students;
  var result;

  it('should throw an error when given an incompatible type', function() {
    expect(function() {
      indexOf({}, 2);
    }).to.throw(TypeError);
  });

  it('should return the first occurrence of the value', function() {
    var arr = [1, 2, 3, 1, 2, 3];

    expect(indexOf(arr, 2)).to.equal(1);
  });

  it('should return null if it cannot find a value', function() {
    var arr = [1, 2, 3, 1, 2, 3];

    expect(indexOf(arr, 5)).to.be.null();
  });

  it('should return the index when searching from a particular index', function() {
    var arr = [1, 2, 3, 1, 2, 3];

    expect(indexOf(arr, 2, 3)).to.equal(4);
  });
});
