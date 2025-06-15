import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

// Ініціалізація компілятора
const sassCompiler = gulpSass(dartSass);

// Таск для SCSS
export function styles() {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/styles'));
}

// Таск за замовчуванням
export default gulp.series(styles);
