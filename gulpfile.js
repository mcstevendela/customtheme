/*
  Usage:
  1. npm install //To install all dev dependencies of package
  2. npm run dev //To start development and server for live preview
  3. npm run build //To generate build files
  4. npm run prod //To generate minified files for live server with PurgeCSS
*/

const { src, dest, task, watch, series, parallel } = require('gulp');
const del = require('del'); //For Cleaning build/dist for fresh export
const options = require("./config"); //paths and other options from config.js
const browserSync = require('browser-sync').create();

const sass = require('gulp-sass')(require('sass')); //For Compiling SASS files
const postcss = require('gulp-postcss'); //For Compiling tailwind utilities with tailwind config
const concat = require('gulp-concat'); //For Concatinating js,css files
const uglify = require('gulp-terser');//To Minify JS files
const imagemin = require('gulp-imagemin'); //To Optimize Images
const cleanCSS = require('gulp-clean-css');//To Minify CSS files
const purgecss = require('gulp-purgecss');// Remove Unused CSS from Styles
const autoprefixer = require('gulp-autoprefixer');
//Note : Webp still not supported in major browsers including firefox
//const webp = require('gulp-webp'); //For converting images to WebP format
//const replace = require('gulp-replace'); //For Replacing img formats to webp in html
const logSymbols = require('log-symbols'); //For Symbolic Console logs :) 

//Load Previews on Browser on dev
function livePreview(done){
  browserSync.init({
    proxy: "localhost:10028/",
    port: 10028,
    notify: false,
    ui: false,
  });
  done();
} 

// Triggers Browser reload
function previewReload(done){
  console.log("\n\t" + logSymbols.info,"Reloading Browser Preview.\n");
  browserSync.reload();
  done();
}

// DEVELOPMENT ////////////////////////////////////////////////
// Clean CSS Bundle
function cleanCSSBundle(){
  console.log("\n\t" + logSymbols.info,"Cleaning CSS bundle for fresh start.\n");
  return del([`${options.paths.dist.css}/bundle.css`]);
}

// Clean AOS Bundle  
function cleanAOSBundle(){
  console.log("\n\t" + logSymbols.info,"Cleaning AOS bundle for fresh start.\n");
  return del([`${options.paths.dist.css}/aos.css`]);
}

// Clean JS Bundle
function cleanJSBundle(){
  console.log("\n\t" + logSymbols.info,"Cleaning JS bundle for fresh start.\n");
  return del([`${options.paths.dist.js}/bundle.min.js`]);
}

// Main Style Processing (bundle.scss - excludes AOS)
function devStyles(){
  const tailwindcss = require('tailwindcss'); 
  return src(`${options.paths.src.css}/bundle.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([tailwindcss(options.config.tailwindjs)]))
    .pipe(cleanCSS({
      advanced: false,
      compatibility: '',
      keepBreaks: false,
      keepSpecialComments: 0
    }))
    .pipe(concat({ path: 'bundle.css'}))
    .pipe(dest(options.paths.dist.css));
}

// AOS Style Processing (aos-frontend.scss - AOS only)
function devAOSStyles(){
  return src(`${options.paths.src.css}/aos-frontend.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({
      advanced: false,
      compatibility: '',
      keepBreaks: false,
      keepSpecialComments: 0
    }))
    .pipe(concat({ path: 'aos.css'}))
    .pipe(dest(options.paths.dist.css));
}

// Scripts Processing
function devScripts(){
  return src([
    `${options.paths.src.js}/aos.min.js`,
    `${options.paths.src.js}/swiper.min.js`, 
    `${options.paths.src.js}/bundle.js`
  ]).pipe(concat({ path: 'bundle.min.js'})).pipe(dest(options.paths.dist.js));
}

// Copying Images
function devImages(){
  return src(`${options.paths.src.img}/**/*`).pipe(dest(options.paths.dist.img));
}
// Copying Includes
function devIncludes(){
  return src(`${options.paths.src.includes}/**/*`).pipe(dest(options.paths.dist.includes));
}
// Copying Fonts
function devFonts(){
  return src(`${options.paths.src.fonts}/**/*`).pipe(dest(options.paths.dist.fonts));
} 

// Watching files for changes
function watchFiles(){
  watch([`${options.paths.src.templates}/**/*.twig`], series(devStyles, devAOSStyles, previewReload));
  watch([options.config.tailwindjs, `${options.paths.src.css}/bundle.scss`, `${options.paths.src.css}/components/**/*.scss`, `${options.paths.src.css}/blocks/**/*.scss`, `${options.paths.src.css}/core/**/*.scss`, `${options.paths.src.css}/plugins/swiper.scss`], series(devStyles, previewReload));
  watch([`${options.paths.src.css}/aos-frontend.scss`, `${options.paths.src.css}/plugins/aos.scss`], series(devAOSStyles, previewReload));
  watch([`${options.paths.src.js}/**/*.js`, `!${options.paths.dist.js}/bundle.min.js`], series(devScripts, previewReload));
  watch([`*.php`, `${options.paths.src.templates}/**/*.twig`], series(previewReload));
  watch([`${options.paths.src.includes}/**/*`], series(devIncludes, previewReload));
  console.log("\n\t" + logSymbols.info,"Watching for Changes..\n");
}

// PRODUCTION ////////////////////////////////////////////////
//Production Tasks (Optimized Build for Live/Production Sites)
function prodClean(){
  console.log("\n\t" + logSymbols.info,"Cleaning build folder for fresh start.\n");
  return del([options.paths.build.base]);
}

// Production: Main CSS with PurgeCSS
function prodStyles() {
  const tailwindcss = require('tailwindcss');
  return src(`${options.paths.src.css}/bundle.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([tailwindcss(options.config.tailwindjs)]))
    .pipe(
      purgecss({
        content: ["./**/*.{html,js,php,twig}"],
        defaultExtractor: (content) => {
          const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
          const innerMatches =
            content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
          return broadMatches.concat(innerMatches);
        },
      })
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(concat({ path: 'bundle.css'}))
    .pipe(dest(options.paths.build.css));
}

// Production: AOS CSS (no PurgeCSS to preserve animation classes)  
function prodAOSStyles(){
  return src(`${options.paths.src.css}/aos-frontend.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(concat({ path: 'aos.css'}))
    .pipe(dest(options.paths.build.css));
}

// Production: JavaScript with minification
function prodScripts(){
  return src([
    `${options.paths.src.js}/aos.min.js`,
    `${options.paths.src.js}/swiper.min.js`,
    `${options.paths.src.js}/bundle.js`
  ])
  .pipe(concat({ path: 'bundle.min.js'}))
  .pipe(uglify())
  .pipe(dest(options.paths.build.js));
}

// Production: Copy Images with optimization
function prodImages(){
  return src(`${options.paths.src.img}/**/*`).pipe(imagemin()).pipe(dest(options.paths.build.img));
}

// Production: Copy Includes
function prodIncludes(){
  return src(`${options.paths.src.includes}/**/*`).pipe(dest(options.paths.build.includes));
}

// Production: Copy Fonts
function prodFonts(){
  return src(`${options.paths.src.fonts}/**/*`).pipe(dest(options.paths.build.fonts));
}

// Production: Copy Templates
function prodTemplates(){
  return src(`${options.paths.src.templates}/**/*`).pipe(dest(options.paths.build.templates));
}

// Production: Copy Theme Files
function prodThemeFiles(){
  return src([`./*.{php,css,png}`, `!gulpfile.js`, `!package*.json`, `!tailwind.config.js`, `!composer.json`, `!README.md`]).pipe(dest(options.paths.build.base));
}

function buildFinish(done){
  console.log("\n\t" + logSymbols.info,`Production build is complete. Files are located at ${options.paths.build.base}\n`);
  done();
}

// EXPORT TASKS ////////////////////////////////////////////////
exports.css = devStyles;
exports.aos = devAOSStyles;  
exports.js = devScripts;
exports.clean = parallel(cleanCSSBundle, cleanAOSBundle, cleanJSBundle);

// Development workflow
exports.default = series(
  parallel(devStyles, devAOSStyles, devScripts, devImages, devIncludes, devFonts), // Build all assets in parallel
  livePreview, // Live Preview Build
  watchFiles // Watch for Live Changes
);

// Build workflow (no live preview)
exports.build = series(
  parallel(devStyles, devAOSStyles, devScripts, devImages, devIncludes, devFonts) // Build all assets
);

// Production workflow with PurgeCSS and minification
exports.prod = series(
  prodClean, // Clean Build Folder  
  parallel(prodStyles, prodAOSStyles, prodScripts, prodImages, prodIncludes, prodFonts, prodTemplates, prodThemeFiles), // Run All tasks in parallel
  buildFinish
);