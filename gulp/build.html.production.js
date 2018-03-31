var gulp = require('gulp'),
    htmlreplace = require('gulp-html-replace'); 

// Updates index.html by replacing content and moves it to /dist/index.html

gulp.task('build:html:production', function () {
  gulp.src('index.html')
    .pipe(htmlreplace({
      'templates': 'js/templates.js',
      'css': 'css/styles.min.css',
      'vendor': 'js/vendor.min.js',
      'app': 'js/app.min.js'
    }))
    .pipe(gulp.dest('dist'));
});