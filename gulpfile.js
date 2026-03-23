let gulp = require('gulp'),
sourcemaps = require('gulp-sourcemaps'),
$ = require('gulp-load-plugins')(),
cleanCss = require('gulp-clean-css'),
rename = require('gulp-rename'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
gp_uglify = require('gulp-uglify'),
mmq = require('gulp-merge-media-queries');

const paths = {
  css: {
    src: './assets/scss/!(*style|*.min).scss',
    dest: './assets/css',
  },
  js: {
    src: './assets/js/**/!(*.min).js',
    dest: './assets/js'
  },
  twig: {
    src: './gutenberg/blocks/**/*.twig',
    dest: './gutenberg/build/blocks'
  }
}

// Base Styles
function styles () {
  return gulp.src([paths.css.src])
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer({
      overrideBrowserslist: [
        'Chrome >= 35',
        'Firefox >= 38',
        'Edge >= 12',
        'Explorer >= 10',
        'iOS >= 8',
        'Safari >= 8',
        'Android 2.3',
        'Android >= 4',
        'Opera >= 12'
      ]
    })]))
    .pipe(mmq({
      log: true
    }))
    .pipe(cleanCss({
      rebase: false,
      rebaseUrls: false,
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.css.dest))
}

// Scripts
function scripts () {
  return gulp.src([paths.js.src])
    .pipe(gp_uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest([paths.js.dest]))
}

// Twig Templates
function twigTemplates() {
  return gulp.src([paths.twig.src], { base: './gutenberg/blocks' })
    .pipe(gulp.dest(paths.twig.dest))
}

// Server (watch)
function watchStyles() {
  gulp.watch([paths.css.src], styles);
}

function watchJs() {
  gulp.watch([paths.js.src], scripts);
}

function watchTwig() {
  gulp.watch([paths.twig.src], twigTemplates);
}

// Watch task
const watch = gulp.series(
  twigTemplates,
  gulp.parallel(
    watchStyles,
    watchJs,
    watchTwig
  )
);

// Build task
const build = gulp.parallel(styles, scripts, twigTemplates);

// Default task
exports.watch = watch;
exports.build = build;
exports.default = watch;