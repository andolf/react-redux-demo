// gulp
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');

// other
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var config = {
    port: 4000,
    paths: {
        js: './src/js/**/*.js',
        styl: './src/styl/**/*.styl',
        compiled: './src/compiled',
        main: './src/main.js'
    }
};

gulp.task('connect', function () {
    connect.server({
        root: ['./src'],
        port: config.port,
        livereload: true
    });
});

gulp.task('js', function () {
    return browserify({
            entries: [config.paths.main],
            debug: true
        })
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.compiled))
        .pipe(livereload());
});

gulp.task('stylus', function () {
    return gulp.src(config.paths.styl)
        .pipe(stylus({
            compress: true
        }))
        .pipe(gulp.dest(config.paths.compiled))
        .pipe(livereload());
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(config.paths.js, ['js']);
    gulp.watch(config.paths.styl, ['stylus']);
});

// tasks
gulp.task('default', ['connect', 'js', 'stylus', 'watch']);