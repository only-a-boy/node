const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const minifyCss = require('gulp-minify-css');
const concat = require('gulp-concat');
const browserify = require('browserify');
const source = require('vinyl-source-stream');


// 编译并压缩js
gulp.task('convertJS', function(){
  return gulp.src('public/javascripts/proto/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('public/dist/js'))
})

gulp.task('convertUserJS', function(){
  return gulp.src('public/javascripts/proto/user/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('public/dist/js/user'))
})

gulp.task('convertCarJS', function(){
  return gulp.src('public/javascripts/proto/car/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('public/dist/js/car'))
})


// 合并并压缩css
gulp.task('convertCSS', function(){
  return gulp.src('public/stylesheets/*.css')
    .pipe(concat('app.css'))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename(function(path){
      path.basename += '.min';
    }))
    .pipe(gulp.dest('public/dist/css'));
})

gulp.task('bundle', function(){
  // return gulp.src(['public/dist/js/*.js', 'public/dist/js/**/*.js'])
  return gulp.src(['public/javascripts/proto/**/*.js','public/javascripts/proto/*.js'])
      .pipe(concat("bundle.min.js"))
      // .pipe(uglify("bundle.min.js"))
      .pipe(gulp.dest('public'));
});


// 监视文件变化，自动执行任务
gulp.task('watch', function(){
  gulp.watch('public/stylesheets/*.css', ['convertCSS']);
  gulp.watch('public/javascripts/proto/*.js', ['convertJS', 'browserify']);
  gulp.watch('public/javascripts/proto/user/*.js', ['convertUserJS', 'browserify']);
  gulp.watch('public/javascripts/proto/car/*.js', ['convertCarJS', 'browserify']);
  gulp.watch(['public/dist/js/*.js', 'public/dist/js/**/*.js'], ['bundle', 'browserify']);
  gulp.watch(['appJS.js'], ['browserify']);
  gulp.watch('public/dist/*.html', ['convertJS']);
})

//browserify
gulp.task("browserify", function () {
    var b = browserify({
        entries: "appJS.js"
    });

    return b.bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("public"));
});


gulp.task('start', ['convertJS', 'convertUserJS','convertCarJS','convertCSS', 'bundle', 'watch']);