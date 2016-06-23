"use strict";

let pkg = require("./package.json");

module.exports = {
  entry: "./" + pkg.main,
  output: {
    path: "../dist",
    filename: "dist.[name].js",
    libraryTarget: "umd"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: "node_modules",
      loader: "babel",
      query: {
        presets: ["es2015", "stage-0"]
      }
    }]
  }
};