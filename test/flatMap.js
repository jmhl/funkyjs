'use strict';

var chai    = require('chai');
var expect  = chai.expect;
var funky   = require('../funky');
var flatMap = funky.flatMap;

describe('map', function() {
  it('should flat map an array', function() {
    var arr = ['aa1bb', 'cc2dd', 'ee3ff'];
    var cb = function(str) { return str.split(/\d/); };
    var res = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff'];
    var flatMapped = flatMap(cb, arr);

    expect(flatMapped).to.deep.equal(res);
  });
});
