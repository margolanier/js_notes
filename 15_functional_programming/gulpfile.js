let gulp = require('gulp');

let sass = require('gulp-sass');

gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', function() {
	return gulp.src('index.html')
		.pipe(gulp.dest('public/'));
})

gulp.task('css', function() {
	return gulp.src('scss/style.scss')
		.pipe(sass()) // requires gulp-sass
		.pipe(gulp.dest('public/'));
})

gulp.task('js', function() {
	return gulp.src('app.js')
		.pipe(gulp.dest('public/'));
})


/*
 * Gulp watch: things to note
 * - only checks the files you specify
 * - only checks the files that exist when you start gulp watching
 * - gets feisty with syntax / sass errors and crashes
 */
gulp.task('watch', ['default'], function() {
	gulp.watch('*.html', ['html']);
	gulp.watch('scss/*.scss', ['css']);
    gulp.watch('app.js', ['js']);
});