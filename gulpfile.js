// gulpfile.js
const path        = require('path');
const { src, dest, watch, series, parallel } = require('gulp');
const sass        = require('gulp-sass')(require('sass'));
const postcss     = require('gulp-postcss');
const autoprefixer= require('autoprefixer');
const concat      = require('gulp-concat');
const uglify      = require('gulp-uglify');
const sourcemaps  = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

// Paths
const paths = {
  html:   { src: 'src/*.html',             dest: 'dist/' },
  styles: { src: 'src/styles/main.scss',   dest: 'dist/styles/' },
  scripts:{ src: 'src/components/**/*.js', dest: 'dist/' },
  assets: { src: 'src/assets/**/*',        dest: 'dist/assets/' }
};

// Compile main.scss → main.css
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

// Bundle & minify JS → main.js
function scripts() {
  return src(paths.scripts.src, { sourcemaps: true })
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(dest(paths.scripts.dest, { sourcemaps: '.' }))
    .pipe(browserSync.stream());
}

// Copy HTML
function html() {
  return src(paths.html.src)
    .pipe(dest(paths.html.dest))
    .pipe(browserSync.stream());
}

// Copy assets
function assets() {
  return src(paths.assets.src)
    .pipe(dest(paths.assets.dest));
}

// Dev server + watch
function serve() {
  browserSync.init({
    server: { baseDir: 'dist/' }
  });
  watch('src/styles/**/*.scss', styles);
  watch(paths.scripts.src, scripts);
  watch(paths.html.src, html);
  watch(paths.assets.src, assets);
}

// Build task
const build = series(
  parallel(styles, scripts, html, assets)
);

exports.styles  = styles;
exports.scripts = scripts;
exports.html    = html;
exports.assets  = assets;
exports.build   = build;
exports.default = series(build, serve);
