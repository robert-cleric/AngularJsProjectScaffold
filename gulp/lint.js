var gulp = require('gulp'),
    eslint = require('gulp-eslint');

// ESLint task
gulp.task('lint', function () {
    return gulp
        .src(['./app/**/*.js', './spec/**/*.js', '!./app/bower_components/**/*'])
        .pipe(eslint())
        .pipe(eslint.format());
    //.pipe(eslint.failAfterError());
});