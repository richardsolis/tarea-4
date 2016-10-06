var gulp    = require('gulp'), 
    browserSync = require('browser-sync').create();

gulp.task('serve', function() {

    browserSync.init({
        server: "app",
        port: 1502
    });

    gulp.watch("clase/css/*.css").on('change', browserSync.reload);
    gulp.watch("clase/*.html").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);