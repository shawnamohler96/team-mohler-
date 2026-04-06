import { build } from 'vite';
build({
  base: './',
  build: { write: false }
}).then(() => console.log('done'));
