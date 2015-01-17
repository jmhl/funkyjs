'use strict';

var chai       = require('chai');
var expect     = chai.expect;
var funky      = require('../funky');
var capitalize = funky.capitalize;

describe('capitalize', function() {
  var str;
  var result;

  before(function() {
    str = 'test string';
    result = 'Test string';
  });

  it('should throw an error when given anything other than a string', function() {
    expect(function() {
      capitalize(123);
    }).to.throw(TypeError);
  });

  it('should capitalize the first letter of a string', function() {
    expect(capitalize(str)).to.equal(result); 
  });

  it('should work for string primitives and string objects', function() {
    var stringObject = new String('test string');

    expect(capitalize(stringObject)).to.equal(result); 
    expect(capitalize(str)).to.equal(result); 
  });

  it('should not throw an error when given an empty string', function() {
    expect(capitalize('')).to.equal('');
  });
});
