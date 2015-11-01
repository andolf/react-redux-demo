// gulp
var gulp = require('gulp');
var connect = require('gulp-connect');

// other
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var config = {
    port: 4000,
    paths: {
        js: './src/**/*.js',
        styl: './src/**/*.styl',
        dist: './src/compiled',
        main: './src/main.js'
    }
};

gulp.task('connect', function () {
    connect.server({
        root: ['./src'],
        port: config.port,
        livereload: false
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
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('watch', function () {
    gulp.watch(config.paths.js, ['js']);
});

// tasks
gulp.task('default', ['connect', 'js']);