let gulp = require('gulp');

let sass = require('gulp-sass'); // sass
let strip = require('gulp-strip-comments'); // remove comments


gulp.task('default', function() {
	// gulp.src() is how you read files
	// gulp.dest() is how you write files
	
	// Use an umbrella task to list subtasks
	gulp.task('default', ['html', 'css', 'js']);
	
});


gulp.task('html', function() {
	
	// 'chaining' is when you pipe each output into the next input
	gulp.src('gulp.html') //gulp.html can be any input file
		.pipe(strip())
		.pipe(gulp.dest('public/')); // cp 'gulp.html into 'public/' dir
	
});


gulp.task('css', function() {
	gulp.src('style.scss')
		.pipe(sass())
		.pipe(strip())
		.pipe(gulp.dest('public/css/'));
	
});


gulp.task('js', function() {
	gulp.src('gulp.html')
		.pipe(strip())
		.pipe(gulp.dest('public/js/'));
});