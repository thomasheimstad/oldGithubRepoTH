var gulp        = require('gulp');
    browserSync = require('browser-sync');
    sass        = require('gulp-sass');
    prefix      = require('gulp-autoprefixer');
    cp          = require('child_process');
    uglify      = require('gulp-uglify');
    gm          = require('gm');
    imageMin    = require ('gulp-imagemin');
    imageResize = require('gulp-image-resize');
    jade        = require('gulp-jade');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

function errorLog(error) {
    console.error.bind(error);
    this.emit('end');
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['sass', 'jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('assets/css/styles.scss')
        .pipe(sass({
            includePaths: ['css'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(browserSync.reload({stream:true}));
});

// Images
// resize and compress 

gulp.task('images', function () {
  gulp.src('img/*')
    .pipe(imageResize({ 
        width : 1920,
        filter: 'catrom'
    }))
    .pipe(imageMin())
    .on('error', errorLog)
    .pipe(gulp.dest('assets/img'));
});


// Scripts Task
// Uglifies
gulp.task('scripts', function(){
   return gulp.src('_js/**/*.js')
    .pipe(uglify())
    .on('error', errorLog)
    .pipe(gulp.dest('_site/js'))
    .pipe(browserSync.reload({stream:true}))
});

// JADE

gulp.task('jade', function(){
    return gulp.src('_jadefiles/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('_includes'));
});


/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('assets/css/**', ['sass']);
    gulp.watch('_jadefiles/*.jade', ['jade']);
    gulp.watch('assets/js/**', ['scripts']);
    gulp.watch(['**/*.html', '_layouts/*.html', '_includes/*'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['sass', 'browser-sync', 'watch']);