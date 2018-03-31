var gulp = require('gulp');

gulp.task('build:fonts:production', function() {
    return gulp.src('app/bower_components/bootstrap/fonts/*')
        .pipe(gulp.dest('dist/fonts'));
});