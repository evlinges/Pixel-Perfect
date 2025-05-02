import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const rootFolder = dirname(fileURLToPath(import.meta.url)).split('/gulp')[0];

export default {
  root: rootFolder,
  src: {
    scss: `${rootFolder}/src/scss/main.scss`,
  },
  watch: {
    scss: `${rootFolder}/src/scss/**/*.scss`,
  },
  build: {
    css: `${rootFolder}/dist/css/`,
  },
};
