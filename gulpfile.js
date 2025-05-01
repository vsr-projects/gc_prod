// gulpfile.js
const { src, dest, watch, series, parallel } = require('gulp');
const fileInclude  = require('gulp-file-include');
const sass         = require('gulp-sass')(require('sass'));
const postcss      = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const concat       = require('gulp-concat');
const sourcemaps   = require('gulp-sourcemaps');
const browserSync  = require('browser-sync').create();

// Source ↠ Destination paths
const paths = {
  html:    { src: 'src/index.html',        dest: 'dist/' },
  styles:  { src: 'src/styles/main.scss',  dest: 'dist/css/' },
  init:    { src: 'src/init.js',           dest: 'dist/js/' },
  scripts: { src: 'src/components/**/*.js',dest: 'dist/js/components/' },
  assets:  { src: 'src/assets/**/*',       dest: 'dist/assets/' }
};

// 1. Process HTML + @@includes
function html() {
  return src(paths.html.src)
    .pipe(fileInclude({ prefix: '@@', basepath: 'src' }))
    .pipe(dest(paths.html.dest))
    .pipe(browserSync.stream());
}

// 2. Compile SCSS → CSS + autoprefix + sourcemaps
function styles() {
  return src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

// 3a. Copy init.js (your module entrypoint)
function scriptsInit() {
  return src(paths.init.src)
    .pipe(dest(paths.init.dest))
    .pipe(browserSync.stream());
}

// 3b. Copy component modules so imports resolve in the browser
function scriptsComponents() {
  return src(paths.scripts.src)
    .pipe(dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

// 4. Copy static assets
function assets() {
  return src(paths.assets.src)
    .pipe(dest(paths.assets.dest));
}

// 5. Dev server + watch
function serve() {
  browserSync.init({ server: 'dist/' });
  watch('src/**/*.html', html);
  watch('src/styles/**/*.scss', styles);
  watch(paths.init.src, scriptsInit);
  watch(paths.scripts.src, scriptsComponents);
  watch(paths.assets.src, assets);
}

// Build task
const build = series(
  parallel(html, styles, scriptsInit, scriptsComponents, assets)
);

exports.html    = html;
exports.styles  = styles;
exports.scripts = parallel(scriptsInit, scriptsComponents);
exports.assets  = assets;
exports.build   = build;
exports.default = series(build, serve);
