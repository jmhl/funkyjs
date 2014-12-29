'use strict';

var chai   = require('chai');
var expect = chai.expect;
var funky  = require('../funky');
var words  = funky.words; 

describe('words', function() {
  it('should split a string on words', function() {
    var str = 'this is a test';
    var result = ['this', 'is', 'a', 'test'];

    expect(words(str)).to.deep.equal(result);
  });
});
