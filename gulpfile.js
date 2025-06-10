import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import * as sass from 'sass';
import gulpSass from 'gulp-sass';

// Ініціалізація gulp-sass з компілятором sass
const sassCompiler = gulpSass(sass);

// Оголошення таску "styles"
gulp.task('styles', () => {
  return gulp.src('src/styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sassCompiler().on('error', sassCompiler.logError)) 
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/styles'));
});

// Додавання таску за замовчуванням
gulp.task('default', gulp.series('styles'));
