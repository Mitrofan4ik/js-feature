
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
// var prettify = require('gulp-prettify');
var kit = require('gulp-kit');
var bsReload = browserSync.reload;

// ======== browserSync ================
gulp.task('browserSync', function () {
	browserSync.init({
		server: {
			baseDir: 'app'
		},
		port: 3000,
		open: true,
		browser: 'default',
		startPath: '/',
		notify: false,
	})
})
// ======== END:browserSync ============

// ======== scss ===================
gulp.task('scss', function () {
	return gulp.src('app/scss/*.scss')
		.pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
		.pipe(autoprefixer('last 5 versions', '>0%', 'ie 7'))
		.pipe(gulp.dest('app/css'))
		.pipe(bsReload({stream:true}))
});
// ======== END:scss ===================

// ======== Kit ===================
gulp.task('kit', function(){
    return gulp.src('app/kit/*.kit')
    .pipe(kit())
    .pipe(gulp.dest('app/'));
});
// ======== END:Kit ===================

// ======== prettify ===================
// gulp.task('prettify', function () {
// 	return gulp.src('app/src/*.html')
// 		.pipe(prettify({
// 			indent_size: 1,
// 			preserve_newlines: true,
// 			indent_with_tabs: true,
// 			end_with_newline: true,
// 			max_preserve_newlines: 0,
// 			brace_style: 'expand'
// 		}))
// 		.pipe(gulp.dest('app/'))
// 		.pipe(bsReload({ stream: true }));
// });
// ======== END: prettify ==============

// ======== watch ======================
gulp.task('watch', function () {
	gulp.watch('app/scss/**/*.scss', ['scss'], bsReload);
	gulp.watch('app/src/**/*.html', bsReload);
	gulp.watch('app/*.html', bsReload);
	gulp.watch('app/kit/**/*.kit', ['kit'], bsReload);
	gulp.watch('app/js/**/*.js', bsReload);
});
// ======== END:watch ==================

// ======== default ====================
gulp.task('default', ['watch', 'scss', 'kit'], function(){
		gulp.start('browserSync');
	}
);
// ======== END:default ================