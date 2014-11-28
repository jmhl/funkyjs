'use strict';

var chai    = require('chai');
var expect  = chai.expect;
var funky   = require('../funky');
var compact = funky.compact;

describe('compact', function() {
  it('throws an error if passed anything other than an array or object', function() {
    expect(function() {
      compact('');
    }).to.throw(TypeError);
  });

  it('removes falsy values from an array', function() {
    var arr = [0, 1, 2, 3, '', null, undefined, NaN, 'a', 'b'];
    var result = [1, 2, 3, 'a', 'b'];

    expect(compact(arr)).to.deep.equal(result);
  });

  it('removes falsy values from an object', function() {
    var obj = {
      'one': 1,
      'two': 2,
      'three': 3,
      'empty': '',
      'null': null,
      'undefined': undefined,
      'NaN': NaN,
      'a': 'a',
      'b': 'b'
    };

    var result = {
      'one': 1,
      'two': 2,
      'three': 3,
      'a': 'a',
      'b': 'b'
    }

    expect(compact(obj)).to.deep.equal(result);
  });

  it('removes falsy values from an array in place', function() {
    var arr = [0, 1, 2, 3, '', null, undefined, NaN, 'a', 'b'];
    var result = [1, 2, 3, 'a', 'b'];

    expect(compact(arr, true)).to.deep.equal(result);
    expect(compact(arr, true)).to.deep.equal(arr);
  });

  it('removes falsy values from an object in place', function() {
    var obj = {
      'one': 1,
      'two': 2,
      'three': 3,
      'empty': '',
      'null': null,
      'undefined': undefined,
      'NaN': NaN,
      'a': 'a',
      'b': 'b'
    };

    var result = {
      'one': 1,
      'two': 2,
      'three': 3,
      'a': 'a',
      'b': 'b'
    }

    expect(compact(obj, true)).to.deep.equal(result);
    expect(compact(obj, true)).to.deep.equal(obj);
  });
});
