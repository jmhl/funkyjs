'use strict';

var chai    = require('chai');
var expect  = chai.expect;
var funky   = require('../funky');
var inject  = funky.inject;

describe('inject', function() {
  it('should throw an error when not passed an array', function() {
    expect(function() {
      inject('+', {});
    }).to.throw(TypeError);
  });

  it('should sum a list', function() {
    var arr = [1, 2, 3];

    expect(inject('+', arr)).to.equal(6);
  });

  it('should perform subtraction on a list', function() {
    var arr = [5, 2, 1];

    expect(inject('-', arr)).to.equal(2);
  });

  it('should perform multiplication on an array', function() {
    var arr = [2, 3, 4];

    expect(inject('*', arr)).to.equal(24);
  });

  it('should perform division on an array', function() {
    var arr = [8, 4, 2];

    expect(inject('/', arr)).to.equal(1);
  });

  it('should curry a function', function() {
    var arr = [1, 2, 3];
    var sumList = inject('+');

    expect(sumList(arr)).to.equal(6);
  });
});

