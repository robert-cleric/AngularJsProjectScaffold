var gulp = require('gulp'); 

// Build production into dist
// ---------------------------
// 0. Pre-req: lint
// 1. Copy fonts
// 2. Copy css
// 3. Copy vendor scripts
// 4. Copy app scripts
// 5. Copy templates into template cache
// 6. Copy and update index.html

gulp.task('build:production', ['lint'], function () {
    gulp.start([
      'build:fonts:production',
      'build:css:production',
      'build:vendor:production',
      'build:app:production',
      'build:templates:production',
      'build:html:production'
    ]);
  });