const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");

function compilaSass() {
  return gulp
    .src("./source/styles/main.scss")
    .pipe(sass())
    .pipe(gulp.dest("./build/styles"));
}

function miniJs() {
  return gulp
    .src("./source/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/scripts"));
}

function comprimeImg() {
  return gulp
    .src("./source/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"));
}

exports.default = function () {
  gulp.watch(
    "./source/styles/*.scss",
    { ignoreInitial: false },
    gulp.series(compilaSass)
  );
  gulp.watch(
    "./source/scripts/*.js",
    { ignoreInitial: false },
    gulp.series(miniJs)
  );
  gulp.watch(
    "./source/images/*",
    { ignoreInitial: false },
    gulp.series(comprimeImg)
  );
};
