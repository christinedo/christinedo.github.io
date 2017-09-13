var gulp = require('gulp'),
    handlebars = require('gulp-compile-handlebars'),
    rename = require('gulp-rename'),
    index = require('./data/index.json');
    about = require('./data/about.json');
    podcats = require('./data/podcats.json');
    muirwoods = require('./data/muirwoods.json');
    leicester = require('./data/leicester.json');

gulp.task('copyAssets', function() {
    return gulp.src(['./public/**/*'], {
            base: './'
        }).pipe(gulp.dest('build'));
});

gulp.task('build', ['about'], function() {
    options = {
        batch: ['./views/partials/']
    }

    return gulp.src('views/index.html')
        .pipe(handlebars(index, options))
        .pipe(rename(function(path) {
            path.extname = '.html';
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('about', ['podcats'], function() {
    options = {
        batch: ['./views/partials/']
    }

    return gulp.src('views/about.html')
        .pipe(handlebars(about, options))
        .pipe(rename(function(path) {
            path.extname = '.html';
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('podcats', ['muirwoods'], function() {
    options = {
        batch: ['./views/partials/']
    }

    return gulp.src('views/podcats.html')
        .pipe(handlebars(podcats, options))
        .pipe(rename(function(path) {
            path.extname = '.html';
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('muirwoods', ['leicester'], function() {
    options = {
        batch: ['./views/partials/']
    }

    return gulp.src('views/muirwoods.html')
        .pipe(handlebars(muirwoods, options))
        .pipe(rename(function(path) {
            path.extname = '.html';
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('leicester', ['copyAssets'], function() {
    options = {
        batch: ['./views/partials/']
    }

    return gulp.src('views/leicester.html')
        .pipe(handlebars(leicester, options))
        .pipe(rename(function(path) {
            path.extname = '.html';
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['build']);
