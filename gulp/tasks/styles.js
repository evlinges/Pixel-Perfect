import gulp from 'gulp';
import sass from 'gulp-sass';
import dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import path from '../config/path.js';

const scssCompiler = sass(dartSass);

export default function styles() {
  return gulp.src(path.src.scss)
    .pipe(sourcemaps.init())
    .pipe(scssCompiler().on('error', scssCompiler.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.build.css));
}
