var gulp = require('gulp'),
    templateCache = require('gulp-angular-templatecache');


// Puts all templates into template cache at /dist/js/templates.js
// Requires 'templates' module registered into the angular app

gulp.task('build:templates:production', function () {
  return gulp.src(['app/**/*.html', '!app/index.html', '!app/bower_components/**/*.html'])
    .pipe(templateCache('templates.js', {root: 'app/'}))
    .pipe(gulp.dest('dist/js'));
});