'use strict';

var funky       = require('../funky');
var printStatus = require('./printStatus');

var file = process.argv[2]; 

// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers
// currently takes args that only suite add (for testing that this works)
funky[file](2,3);
%OptimizeFunctionOnNextCall(funky[file]);
funky[file](2,3);
printStatus(funky[file]);
