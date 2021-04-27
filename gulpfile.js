const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const fse = require('fs-extra')

gulp.task('minify-scss', () => {
  return gulp.src('./src/**.scss')
  .pipe(sass.sync({
    outputStyle: 'compressed'
  }))
  .pipe(autoprefixer({
    browsers: ['ie > 9', 'last 2 versions'],
    cascade: false
  }))
  .pipe(cleanCSS({ 
    compatibility: 'ie8',
    keepSpecialComments: '*' // 保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
  }))
  .pipe(gulp.dest('./lib'))
})

// for docs 
gulp.task('docScss', () => {
  return gulp.src('./src/_doc.scss')
    .pipe(rename('doc.scss'))
    .pipe(sass.sync({
      outputStyle: 'compact'
    }))
    .pipe(gulp.dest('./docs/.vuepress/styles'))
})

// watch scss
gulp.task('sass:watch', function () {
  gulp.watch('./src/*.scss', gulp.series('docScss'));
  return
})

// empty before build
gulp.task('empty:lib', (done) => {
  fse.removeSync('./lib')
  done()
})


exports.build = gulp.parallel(gulp.series('empty:lib', 'minify-scss'), 'docScss')

exports.watch = gulp.series('sass:watch')


