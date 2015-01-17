'use strict';

var funky   = require('../funky');
var compact = funky.compact; 
var lodash  = require('lodash');

var arr = [0, 1, 2, 3, '', null, undefined, NaN, 'a', 'b'];
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

module.exports = {
  name: 'compact',
  tests: [
    {
      name: 'compact new array',
      maxTime: 2,
      fn: function() {
        compact(arr);
      }
    },
    {
      name: 'compact array in place',
      maxTime: 2,
      fn: function() {
        compact(arr, true);
      }
    },
    {
      name: 'compact new object',
      maxTime: 2,
      fn: function() {
        compact(obj);
      }
    },
    {
      name: 'compact object in place',
      maxTime: 2,
      fn: function() {
        compact(obj, true);
      }
    },
    {
      name: 'LODASH COMPACT',
      maxTime: 2,
      fn: function() {
        lodash.compact(arr);
      }
    }
  ]
};
