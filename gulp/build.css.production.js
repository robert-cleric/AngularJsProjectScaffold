var gulp = require('gulp'),
  concat = require('gulp-concat'),
  minifycss = require('gulp-minify-css'); 


// Minifies and moves all CSS into /dist/css/styles.min.css
gulp.task('build:css:production', function () {
  gulp
    .src([
        'app/bower_components/html5-boilerplate/dist/css/normalize.css',
        'app/bower_components/bootstrap/dist/css/bootstrap.min.css',
        'app/bower_components/html5-boilerplate/dist/css/main.css',
        'app/bower_components/angular-toastr/dist/angular-toastr.css',
        'app/content/style.css'
    ])
    .pipe(minifycss())
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('dist/css'))
});