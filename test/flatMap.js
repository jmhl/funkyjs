'use strict';

var chai    = require('chai');
var expect  = chai.expect;
var funky   = require('../funky');
var flatMap = funky.flatMap;

describe('flatMap', function() {
  it('should flat map an array', function() {
    var arr = ['aa1bb', 'cc2dd', 'ee3ff'];
    var cb = function(str) { return str.split(/\d/); };

    var flatMapped = flatMap(cb, arr);
    var res = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff'];

    expect(flatMapped).to.deep.equal(res);
  });

  it('should curry the function', function() {
    var arr = ['aa1bb', 'cc2dd', 'ee3ff'];
    var cb = function(str) { return str.split(/\d/); };

    var res = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff'];
    var flatMapSplit = flatMap(cb);

    expect(flatMapSplit(arr)).to.deep.equal(res);
  });
});
