const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');


gulp.task('default', function(){
    browserSync.init({
        server: {
            baseDir: './app'
        }
    });

    gulp.src('./app/images/**/*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
    
    gulp.watch('./app/styles/*.css').on('change', browserSync.reload);
    gulp.watch('./app/index.html').on('change', browserSync.reload);
});
