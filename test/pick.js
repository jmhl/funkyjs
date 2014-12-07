'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var pick   = funky.pick;

describe('pick', function() {
  it('throws an error if not passed an object', function() {
    expect(function() {
      pick(['one'], []);
    }).to.throw(TypeError);
  });

  it('picks existing properties from an object', function() {
    var obj = { 'one': 1, 'two': 2, 'three': 3 };
    var expected = { 'one': 1, 'three': 3 };
    var result = pick(['one', 'three'], obj);

    expect(result).to.deep.equal(expected);
  });

  it('picks existing properties and ignores undefined ones', function() {
    var obj = { 'one': 1, 'two': 2, 'three': 3 };
    var expected = { 'one': 1, 'three': 3 };
    var result = pick(['one', 'three', 'four'], obj);

    expect(result).to.deep.equal(expected);
  });

  it('curries the object', function() {
    var obj = { 'one': 1, 'two': 2, 'three': 3 };
    var pickProps = pick(['one', 'three']);
    var result = pickProps(obj);
    var expected = { 'one': 1, 'three': 3 };

    expect(result).to.deep.equal(expected);
  });
});
