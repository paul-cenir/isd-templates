var gulp = require('gulp');
var less = require('gulp-less');
var order = require("gulp-order");
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var path = require('path');

gulp.task('atomicStyles', function () {
    return gulp.src('less/atomic-less/**/*.less')
      .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
      }))
      .pipe(gulp.dest('./css/'));
  });

gulp.task('siteStyles', function () {
    return gulp.src('../less/**/*.less')
      .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
      }))
      .pipe(gulp.dest('../css'));
  });

var jsDest = 'js/min';

gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(order([
            'js/enquire.js',
            'libraries/bootstrap/3.3.7/js/bootstrap.min.js',
            'js/prism.js',
            'js/spectrum-picker.js',
            'js/uncomment.js',
            'js/prism-builder.js',
            'js/velocity.js',
            'js/velocity-ui.js',
            'js/_expand-form.js',
            'js/formShowHide.js',
            'js/slideAnimation.js',
            'js/hideAll.js',
            'js/hideCode.js',
            'js/hideNotes.js',
            'js/hideTitle.js',
            'js/navSmall.js',
            'js/animateHeight.js',
            'js/editor-stuff.js',
            'js/editable-content.js'
        ], { base: './' }))
        .pipe(concat('compiled.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('compiled.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

var jsDest2 = '../js/min';

gulp.task('scripts2', function() {
    return gulp.src('../js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest(jsDest2))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest2));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('less/**/*.less',['atomicStyles']);
    gulp.watch('../less/**/*.less',['siteStyles']);
    gulp.watch('js/*.js',['scripts']);
    gulp.watch('../js/*.js',['scripts2']);
});

gulp.task('setup', ['atomicStyles']);
gulp.task('setup', ['siteStyles']);
