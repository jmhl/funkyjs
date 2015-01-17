'use strict';

var exec = require('child_process').exec;
var fs   = require('fs');

process.argv.forEach(function(fileName, i) {
  if (i === 0 || i === 1) return;

  var runFile = 'node --trace_opt --trace_deopt --allow-natives-syntax opt/index.js ' +
    fileName +
    ' > opt/report/' +
    fileName +
    '.txt';

  exec(runFile, function() {
    fs.readFile('opt/report/' + fileName + '.txt', 'utf-8', function(err, data) {
      var lines = data.trim().split('\n');
      var lastLine = lines.slice(-1)[0];
      console.log(lastLine);
    });
  });
});
