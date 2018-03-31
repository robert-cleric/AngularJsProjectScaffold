var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util'); 

// 1. Register files
// 2. Initialize sourcemaps
// 3. Obfuscate code
// 4. Combine scripts
// 5. Finalize sourcemaps
// 6. Copy to destination

gulp.task('build:app:production', function(){
  return gulp.src([
    '!app/bower_components/**/*.*',
    'app/app.module.js',
    'app/**/*.module.js',
    'app/**/*.js'   
  ])
  .pipe(sourcemaps.init())
  .pipe(uglify({
    mangle: true
  })).on('error', gutil.log)
  .pipe(concat('app.min.js')) 
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('dist/js'));
});