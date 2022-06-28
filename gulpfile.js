const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')(require('sass'))
const minifyCss = require('gulp-clean-css')

gulp.task('serve', function () {
  
  browserSync.init({
    server: {
      baseDir: './public',
      index: 'index.html'
    }
  })

  //Add minify
  gulp.watch('public/sass/*.scss', gulp.series('sass'))
  gulp.watch('public/*.html').on('change', browserSync.reload)

})

gulp.task('sass', function () {

  return gulp.src('public/sass/*.scss')
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream())
})

gulp.task('start', gulp.series('serve', 'sass'))