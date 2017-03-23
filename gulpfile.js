var gulp = require('gulp');
var jsFiles = ['*.js', 'src/**/*.js'];
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

gulp.task('style', function () {
  return gulp.src(jsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', {
      verbose: true
    }))
    .pipe(jscs());
});
