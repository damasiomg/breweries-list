const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const nodeSass = require('sass');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const htmlmin = require('gulp-htmlmin');

const sass = gulpSass(nodeSass);


gulp.task('app', ['app.html', 'app.sass', 'app.js', 'app.assets']);
gulp.task('app.html', () => {
    return gulp.src('app/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('public'))
});

gulp.task('app.sass', () => {
    return gulp.src('app/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('public/assets/css'))
});


gulp.task('app.js', () => {
    return gulp.src('app/**/*.js')
    .pipe(babel({ presets: ['env'] }))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('public/assets/js'))
});


gulp.task('app.assets', () => {
  return gulp.src('assets/**/*.*')
    .pipe(gulp.dest('public/assets'))  
});