const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const nodemon = require('gulp-nodemon');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

var exec = require('child_process').exec;

gulp.task('default', (cb) => {
	// Compile Styles
	exec('npm run styles', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
	// Compile REACT
	exec('npm run dev:webpack', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
	// SERVE BACKEND
	nodemon({
	 script: 'server.js',
	 env: { 'NODE_ENV': 'development'}
 });
 // SERVE FRONT END WITH PROXY TO BACKEND
	browserSync.init({
	 proxy: {
		 target: 'http://localhost:8000',
		 ws: true
	 },
	 serveStatic: ['./public']
	});
	// SET UP WATCHERS TO LISTEN TO CHANGES IN FILES
	gulp.watch('./src/scss/**/*',  gulp.task('styles'));
	gulp.watch('./src/components/**/*', gulp.task('webpack'));
	gulp.watch('./src/**/*.js', gulp.task('webpack'));
	gulp.watch('./src/*', gulp.task('webpack'));
	// LISTEN FOR WHEN TO RELOAD PAGES
	gulp
		.watch([
			'./public/**/*',
			'./public/*',
			'./public/js/**/.#*js',
			'./public/css/**/.#*css',
			'./src/**/*'
		])
		.on('change', reload);
		cb()
});

gulp.task('styles', (cb) => {
	gulp
		.src('src/scss/**/*.scss')
		.pipe(
			sass({
				outputStyle: 'compressed'
			}).on('error', sass.logError)
		)
		.pipe(
			autoprefixer({
				cascade: false
			})
		)
		.pipe(gulp.dest('./public/css'))
		.pipe(browserSync.stream());
		cb()
});

gulp.task('webpack', cb => {
	exec('npm run dev:webpack', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});

gulp.task('build', cb => {
	exec('npm run build:webpack', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});