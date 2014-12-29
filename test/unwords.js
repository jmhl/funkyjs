'use strict';

var chai    = require('chai');
var expect  = chai.expect;
var funky   = require('../funky');
var unwords = funky.unwords; 

describe('unwords', function() {
  it('should split a string on words', function() {
    var arr = ['this', 'is', 'a', 'test'];
    var result = 'this is a test';

    expect(unwords(arr)).to.deep.equal(result);
  });
});
