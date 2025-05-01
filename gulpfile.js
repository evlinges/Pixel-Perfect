const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

// Компіляція SASS у CSS
gulp.task('sass', function() {
  return gulp.src('src/sass/**/*.scss') // джерела для SASS
    .pipe(sass().on('error', sass.logError)) // компіляція
    .pipe(autoprefixer()) // додавання автопрефіксів
    .pipe(cleanCSS()) // мінімізація CSS
    .pipe(gulp.dest('dist/css')) // виведення у dist/css
    .pipe(browserSync.stream()); // автоматичне перезавантаження браузера
});

// Оптимізація зображень
gulp.task('images', function() {
  return gulp.src('src/images/**/*') // джерела зображень (включає підкаталоги)
    .pipe(imagemin()) // оптимізація зображень
    .pipe(gulp.dest('dist/images')); // виведення в dist/images
});

// Налаштування серверу з автоматичним перезавантаженням
gulp.task('serve', function() {
  browserSync.init({
    server: './', // запуск серверу з кореня проекту
    notify: false
  });

  // Спостереження за змінами у файлах
  gulp.watch('src/sass/**/*.scss', gulp.series('sass')); // спостереження за SASS
  gulp.watch('*.html').on('change', browserSync.reload); // спостереження за HTML
  gulp.watch('src/images/**/*', gulp.series('images')); // спостереження за зображеннями
});

// Запуск завдання по замовчуванню
gulp.task('default', gulp.series('sass', 'images', 'serve'));
