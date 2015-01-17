'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var pick   = funky.pick;

describe('pick', function() {
  var obj;
  var expected;

  before(function() {
    obj = { 'one': 1, 'two': 2, 'three': 3 };
    expected = { 'one': 1, 'three': 3 };
  });

  it('should throw an error if not passed an object', function() {
    expect(function() {
      pick(['one'], []);
    }).to.throw(TypeError);
  });

  it('should pick existing properties from an object', function() {
    var result = pick(['one', 'three'], obj);

    expect(result).to.deep.equal(expected);
  });

  it('should pick existing properties and ignores undefined ones', function() {
    var result = pick(['one', 'three', 'four'], obj);

    expect(result).to.deep.equal(expected);
  });

  it('should curry the object', function() {
    var pickProps = pick(['one', 'three']);
    var result = pickProps(obj);

    expect(result).to.deep.equal(expected);
  });
});
