'use strict';

var funky = require('../funky');
var take  = funky.take;

var arr = [1, 2, 3, 4, 5, 6];

module.exports = {
  name: 'take',
  maxTime: 2,
  fn: function() {
    take(2, arr);
  }
};
