/**
 * Created by yang on 2015/10/14.
 */
var gulp = require('gulp');

gulp.task('uglify', function() {
    return gulp.src('./ng-fileDrop.js')
        .pipe(require('gulp-uglify')())
        .pipe(require('gulp-ext-replace')('.min.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy', function() {
    return gulp.src('./ng-fileDrop.js')
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', [ 'uglify', 'copy' ]);

gulp.task('default', ['build']);