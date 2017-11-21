const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('src/sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

gulp.task('js', function(){
    return gulp.src('node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function(){
    browserSync.init({
        server: "./src"
    });

    gulp.watch('src/sass/*.sass', ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('fonts', function(){
    return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('src/fonts'));
});

gulp.task('fa-css', function(){
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('src/css'));
});

gulp.task('default', ['js', 'serve', 'fa-css', 'fonts']);