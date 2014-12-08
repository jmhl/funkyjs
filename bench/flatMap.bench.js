'use strict';

var funky   = require('../funky');
var flatMap = funky.flatMap;
var flatten = funky.flatten;
var map     = funky.map;

var arr = ['aa1bb', 'cc2dd', 'ee3ff'];
var cb = function(str) { return str.split(/\d/); };

module.exports = {
  name: 'flatMap',
  tests: [
    {
      name: 'flatMap',
      maxTime: 2,
      fn: function() {
        flatMap(cb, arr);
      }
    },
    {
      name: 'map then flatten',
      maxTime: 2,
      fn: function() {
        flatten(map(cb, arr));
      }
    }
  ]
};
