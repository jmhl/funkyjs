'use strict';

var chai    = require('chai');
var expect  = chai.expect;
var funky   = require('../funky');
var keys    = funky.keys;

describe('keys', function() {
  it("should return an array of the object's keys", function() {
    var obj = { 'one': 1, 'two': 2 };
    var result = ['one', 'two'];

    expect(keys(obj)).to.deep.equal(result);
  });
});
