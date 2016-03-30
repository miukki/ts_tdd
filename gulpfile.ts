///<reference path="typings/tsd.d.ts"/>

import gulp = require('gulp');
import uglify = require('gulp-uglify');
import childProcess = require('child_process');

gulp.task('minify', ['compile'], () => {
    
    return gulp.src('./dist/ts_project.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
    
});

gulp.task('compile', () => {
    childProcess.execSync('npm run compile');    
});

gulp.task('test', () => {
    childProcess.execSync('npm run test');
});

gulp.task('minify_test', () => {
    childProcess.execSync('npm run minify_test');
});

gulp.task('default', ['test']);
