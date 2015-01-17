'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var upcase = funky.upcase;

describe('upcase', function() {
  var str;
  var result;

  before(function() {
    str = 'test string';
    result = 'TEST STRING';
  });

  it('should throw an error when given anything other than a string', function() {
    expect(function() {
      upcase(123);
    }).to.throw(TypeError);
  });

  it('should capitalize every letter in a string', function() {
    expect(upcase(str)).to.equal(result); 
  });

  it('should work for string primitives and string objects', function() {
    var stringObject = new String('test string');

    expect(upcase(stringObject)).to.equal(result); 
    expect(upcase(str)).to.equal(result); 
  });

  it('should not throw an error when given an empty string', function() {
    expect(upcase('')).to.equal('');
  });
});
