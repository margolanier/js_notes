/*
 * purpose of gulpfile is to describe 'tasks' that
 * convert from 'dev mode' to 'prod mode'
 * converts scss => css, remove comments, merge files
 */

// Import Gulp
let gulp = require('gulp');

// Import Gulp Plugins
let sass = require('gulp-sass'); // download this npm plugin

// Default Task
gulp.task('default', ['html', 'css', 'js', 'watch']);

// Subtasks
gulp.task('html', function() {
	// copy index.html into the public/ directory
	return gulp.src('index.html')
		.pipe(gulp.dest('public/'));
})

gulp.task('css', function() {
	// convert style.scss into style.css
	// copy to public/
	return gulp.src('scss/style.scss')
		.pipe(sass()) // requires gulp-sass
		.pipe(gulp.dest('public/'));
})

gulp.task('js', function() {
	// copy js file into public/
	return gulp.src('app.js')
		.pipe(gulp.dest('public/'));
})

// Watch files for changes
gulp.task('watch', function() {
	gulp.watch('index.html', ['html']);
	gulp.watch('scss/*.scss', ['css']);
    gulp.watch('app.js', ['js']);
});