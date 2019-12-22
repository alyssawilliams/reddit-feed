// Packages
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

// I/O variables
var sassInput = './src/sass/index.scss';
var outputFolder = './src';

// Turns the SASS snippets into a single CSS file
gulp.task('sass', function () {
  return gulp
    // Find the 'style.scss' file in the '/sass/ folder
    .src(sassInput)
    // Activate sourcemaps
    .pipe(sourcemaps.init())
    // Run Sass on that file
    .pipe(sass())
    // Run autoprefixer
    .pipe(autoprefixer())
    // Write sourcemap to same directory as style.css
    .pipe(sourcemaps.write('.'))
    // Write the resulting css file to the output folder
    .pipe(gulp.dest(outputFolder));
  });

// Watches the src folder for any changes and refreshes the page
gulp.task('watch', function(){
  gulp.watch('./src/sass/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));