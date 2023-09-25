/**
 * 本文件为组件发布前的打包
 */
 const fs = require('fs');
const gulp = require('gulp');
const babel = require('gulp-babel');
const less = require('gulp-less');
const clean = require('gulp-clean');
const autoprefixer = require('gulp-autoprefixer');

const replace = require('gulp-replace');
const strip = require('gulp-strip-comments');
const stripCssComments = require('gulp-strip-css-comments');
const packageJson = require('./CompilePackage.json');

const FILE_DIR_CJS = 'build/cjs';
const FILE_DIR_ESM = 'build/esm';

// 情况文件夹
function doClean() {
  return gulp.src(['build/'], { read: false, allowEmpty: true }).pipe(clean());
}

// 编译less
function doLess() {
  return gulp
    .src(['src/**/**/*.less'])
    .pipe(less({ relativeUrls: true }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(FILE_DIR_ESM))
    .pipe(gulp.dest(FILE_DIR_CJS));
}

// 编译 js 到 esm
function compileJSEsm() {
  return gulp
    .src('src/**/**/*.{js,jsx}')
    .pipe(
      babel({
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
            },
          ],
        ],
        plugins: ['transform-class-properties'],
      }),
    )
    .pipe(gulp.dest(FILE_DIR_ESM));
}

// 编译 js 到 cjs
function compileJSCjs() {
  return gulp
    .src('src/**/**/*.{js,jsx}')
    .pipe(
      babel({
        presets: [
          [
            '@babel/preset-env',
            {
              modules: 'commonjs',
            },
          ],
        ],
        plugins: ['transform-class-properties'],
      }),
    )
    .pipe(gulp.dest(FILE_DIR_CJS));
}

// 拷贝静态资源
function copyImages() {
  return gulp.src(['src/**/**/*.{png,gif,jpg,svg,bmp}']).pipe(gulp.dest(FILE_DIR_ESM)).pipe(gulp.dest(FILE_DIR_CJS));
}

function copyFonts() {
  return gulp.src(['src/**/**/*.{eot,ttf,woff,woff2}']).pipe(gulp.dest(FILE_DIR_ESM)).pipe(gulp.dest(FILE_DIR_CJS));
}

// 删除js中注释
function stripJSEsm() {
  return gulp.src(['build/esm/**/*.js']).pipe(strip()).pipe(gulp.dest(FILE_DIR_ESM));
}

function stripJSCjs() {
  return gulp.src(['build/cjs/**/*.js']).pipe(strip()).pipe(gulp.dest(FILE_DIR_CJS));
}

// 删除css中注释
function stripCSSEsm() {
  return gulp.src(['build/esm/**/*.css']).pipe(stripCssComments()).pipe(gulp.dest(FILE_DIR_ESM));
}

function stripCSSCjs() {
  return gulp.src(['build/cjs/**/*.css']).pipe(stripCssComments()).pipe(gulp.dest(FILE_DIR_CJS));
}

// 替换cjs中的.less后缀
function replaceRequireStyles() {
  return gulp
    .src(['build/cjs/**/*.js'])
    .pipe(replace(/require\(['"](.*)\.less['"]\)/g, "require('$1.css')"))
    .pipe(gulp.dest(FILE_DIR_CJS));
}

// 替换esm中的.less后缀
function replaceImportStyles() {
  return gulp
    .src(['build/esm/**/*.js'])
    .pipe(replace(/['"](.*)\.less['"]/g, "'$1.css'"))
    .pipe(gulp.dest(FILE_DIR_ESM));
}

function copyReadme() {
  return gulp.src(['*.md']).pipe(gulp.dest('build'));
}

function copyPackageJson(cb) {
  fs.writeFile('./build/package.json', JSON.stringify(packageJson, null, 2), cb);
}

function copyEsmToRoot(cb) {
  return gulp.src(['build/esm/**/*.*']).pipe(gulp.dest('build'));
}

const buildFunctions = [
  // 编译 less 文件到 esm 和 cjs 文件夹中
  doLess,
  // 编译 js 和 ts 文件到 esm 文件夹中
  compileJSEsm,
  // 编译 js 和 ts 文件到 cjs 文件夹中
  compileJSCjs,
  // 将 cjs 文件夹中的 .less 替换成 .css 文件
  replaceRequireStyles,
  // 将 esm 文件夹中的 .less 替换成 .css 文件
  replaceImportStyles,
  // 拷贝静态资源
  copyImages,
  copyFonts,
  // 删除 js 和 css 中的注释
  stripJSEsm,
  stripJSCjs,
  stripCSSEsm,
  stripCSSCjs,
  // 拷贝静态文件
  copyReadme,
  copyPackageJson,
  // 最后将 esm 文件夹下的所有文件考到 build 根目录下
  // copyEsmToRoot,
];

// 清空build文件夹
gulp.task('clean', doClean);

// 编译组件库
gulp.task('compile', gulp.series(doClean, ...buildFunctions));

// 默认命令
gulp.task('default', gulp.series(doClean, gulp.parallel(gulp.series(...buildFunctions))));
