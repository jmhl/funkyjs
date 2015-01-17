'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var get    = funky.get;

describe('get', function() {
  it('should throw an error if not passed an object', function() {
    expect(function() {
      get([], 'one');
    }).to.throw(TypeError);
  });

  it('should get the correct attribute', function() {
    var obj = { 'one': 1, 'two': 2 };
    expect(get(obj, 'two')).to.equal(2);
  });

  it('should curry the function if not given a property name', function() {
    var obj = { 'one': 1, 'two': 2 };
    var getObj = get(obj);

    expect(getObj('two')).to.equal(2);
  });
});
