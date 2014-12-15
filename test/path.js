'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var path   = funky.path;

describe('path', function() {
  it('should find the nth element in the list', function() {
    var obj = {
      'a': {
        'b': {
          'c' : 2 
        },
        'd': 5,
        'e': 7
      },
      'f': 9
    };

    expect(path('a.b.c', obj)).to.equal(2);
  });
});
