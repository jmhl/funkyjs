'use strict';

var funky = require('../funky');
var pick  = funky.pick;

var obj = { 'one': 1, 'two': 2, 'three': 3 };

module.exports = {
  name: 'pick',
  maxTime: 2,
  fn: function() {
    pick(obj, ['one', 'three']);
  }
};
