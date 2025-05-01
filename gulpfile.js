// gulpfile.js
const { src, dest, watch, series, parallel } = require('gulp');
const sass         = require('gulp-sass')(require('sass'));
const postcss      = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const concat       = require('gulp-concat');
const uglify       = require('gulp-uglify');
const sourcemaps   = require('gulp-sourcemaps');
const browserSync  = require('browser-sync').create();
const fileInclude  = require('gulp-file-include');

const paths = {
  html:    { src: 'src/index.html',        dest: 'dist/' },
  styles:  { src: 'src/styles/main.scss',  dest: 'dist/css/' },
  scripts: { src: 'src/components/**/*.js',dest: 'dist/js/' },
  assets:  { src: 'src/assets/**/*',       dest: 'dist/assets/' }
};

// HTML + includes
function html() {
  return src(paths.html.src)
    .pipe(fileInclude({
      prefix: '@@',
      basepath: 'src'
    }))
    .pipe(dest(paths.html.dest))
    .pipe(browserSync.stream());
}

// SCSS → CSS
function styles() {
  return src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: 'expanded' })
      .on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

// JS → bundle
function scripts() {
  return src(paths.scripts.src, { sourcemaps: true })
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(dest(paths.scripts.dest, { sourcemaps: '.' }))
    .pipe(browserSync.stream());
}

// Copy assets
function assets() {
  return src(paths.assets.src)
    .pipe(dest(paths.assets.dest));
}

// Watch + serve
function serve() {
  browserSync.init({ server: 'dist/' });
  watch('src/**/*.html', html);
  watch('src/styles/**/*.scss', styles);
  watch(paths.scripts.src, scripts);
  watch(paths.assets.src, assets);
}

exports.default = series(
  parallel(html, styles, scripts, assets),
  serve
);
