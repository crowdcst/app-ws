'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat')

var files = {
  js: ['client/app/**/*.js'],
  scss: ['client/app/**/*.scss']
}

//Auto compile during development
gulp.task('start', ['js', 'sass'], function () {

  var app = require('./index')
  console.log('Watching .js, .scss files in client/app/')
  gulp.watch(files.js, ['js'])
  gulp.watch(files.scss, ['sass'])
})

gulp.task('sass', function () {
  return gulp.src(files.scss)
    .pipe(sass().on('error', swallow))
    .pipe(concat({ path: 'app.css', stat: { mode: '0666' }}))
    .pipe(gulp.dest('client/dist'))
})

gulp.task('js', function() {
  return gulp.src(files.js)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('client/dist'))
})

function swallow (error) {
  console.log(error.toString())
  this.emit('end')
}