import browserSync from 'browser-sync';

export const server = () => {
  browserSync.init({
    server: {
      baseDir: './',
    },
    notify: false,
    port: 3000,
  });

  browserSync.watch('index.html').on('change', browserSync.reload);
};
