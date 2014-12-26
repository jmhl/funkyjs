'use strict';

var gulp      = require('gulp');
var benchmark = require('gulp-bench');

gulp.task('bench', function() {
  gulp.src('bench/*.js', { read: false })
    .pipe(benchmark())
    .pipe(gulp.dest('bench/report/bench.' + (new Date()).getTime() + '.json'));
});
