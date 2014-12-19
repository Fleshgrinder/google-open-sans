/* jshint node:true */
"use strict";

var gulp  = require("gulp");
var gzip  = require("gulp-gzip");
var merge = require("merge-stream");

function compress(directory) {
  return gulp.src(directory + "/*.{eot,svg,ttf,woff}")
    .pipe(gzip({ gzipOptions: { level: 9 } }))
    .pipe(gulp.dest(directory));
}

gulp.task("default", function () {
  return merge(compress("open-sans"), compress("open-sans-condensed"));
});
