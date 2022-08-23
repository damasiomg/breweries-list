const gulp = require('gulp');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');

gulp.task('deps', ['deps.js']);

gulp.task('deps.js', () => {
    return gulp.src([
        'node_modules/angular/angular.js',
        'node_modules/angular-route/angular-route.js',
        'node_modules/angular-aria/angular-aria.js',
        'node_modules/angular-animate/angular-animate.js'
    ])
    .pipe(uglify())
    .pipe(concat('deps.min.js'))
    .pipe(gulp.dest('public/assets/js'))
});

