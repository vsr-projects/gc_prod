const { src, dest, watch, series } = require('gulp');
const fileInclude = require('gulp-file-include');
const htmlmin    = require('gulp-htmlmin');
const browserSync= require('browser-sync').create();

// 1) Process HTML with includes & minify
function html() {
  return src('src/*.html')
    .pipe(fileInclude({
      prefix: '@@',
      basepath: 'src'
    }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream());
}

// 2) Serve & watch
function serve() {
  browserSync.init({
    server: 'dist',
    port: 3000
  });
  watch('src/**/*.html', html);
  watch('src/assets/**/*', series(copyAssets, html));
}

// 3) Copy assets
function copyAssets() {
  return src('src/assets/**/*')
    .pipe(dest('dist/assets'));
}

exports.html = series(copyAssets, html);
exports.default = series(copyAssets, html, serve);
