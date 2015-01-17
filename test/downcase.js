'use strict';

var chai     = require('chai');
var expect   = chai.expect;
var funky    = require('../funky');
var downcase = funky.downcase;

describe('downcase', function() {
  var str;
  var result;

  before(function() {
    str = 'TeSt STriNg';
    result = 'test string';
  });

  it('should throw an error when given anything other than a string', function() {
    expect(function() {
      downcase(123);
    }).to.throw(TypeError);
  });

  it('should downcase every letter in a string', function() {
    expect(downcase(str)).to.equal(result); 
  });

  it('should work for string primitives and string objects', function() {
    var stringObject = new String('test string');

    expect(downcase(stringObject)).to.equal(result); 
    expect(downcase(str)).to.equal(result); 
  });

  it('should not throw an error when given an empty string', function() {
    expect(downcase('')).to.equal('');
  });
});

