var gulp        = require('gulp')
   ,browserSync = require('browser-sync')
   ,reload      = browserSync.reload


var index = 'index.html'
   ,root  = './*'


gulp.task('index', function () {
  gulp.src(index)
    .pipe(reload({ stream:true }))
})

gulp.task('browser-sync', function () {
  browserSync.init({
    proxy:'localhost:8080'
  })
})

gulp.task('watch', function () {
  gulp.watch(root, ['index'])
})

gulp.task('default', ['watch', 'browser-sync'])
