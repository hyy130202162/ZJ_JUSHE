"use strict";
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,

  configureWebpack: {
    resolve: {
      alias: {
        "~": resolve("src")
      }
    }
  },

  productionSourceMap: false,

  css: {
    sourceMap: true
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: []
    }
  }
};
