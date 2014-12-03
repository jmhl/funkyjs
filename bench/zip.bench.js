'use strict';

var funky = require('../funky');
var zip   = funky.zip;

var list1 = [1, 2, 3];
var list2 = ['a', 'b', 'c'];
var obj = { 'one': 1, 'two': 2, 'three': 3 };

module.exports = {
  name: 'zip',
  tests: [
    {
      name: 'zip array',
      maxTime: 2,
      fn: function() {
        zip(list1, list2);
      }
    },
    {
      name: 'zip object',
      maxTime: 2,
      fn: function() {
        zip(obj);
      }
    }
  ]
};
