var gulp = require('gulp'),
  concat = require('gulp-concat'); 


// Combines all vendor scripts into /dist/js/vendor.min.js
gulp.task('build:vendor:production', function(){
  return gulp.src([
    'app/bower_components/jquery/dist/jquery.min.js',
    'app/bower_components/jquery-ui/jquery-ui.min.js',
    'app/bower_components/angular/angular.min.js',
    'app/bower_components/angular-ui-router/release/angular-ui-router.min.js',
    'app/bower_components/spin.js/spin.js',
    'app/bower_components/toastr/toastr.min.js',
  ])
  .pipe(concat('vendor.min.js'))
  .pipe(gulp.dest('dist/js'));
});