const path = require('path');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CopyPlugin({
      patterns: [
        path.resolve(__dirname, "static", "favicon.ico"),
        {
          from: path.resolve(__dirname, "./dist"),
          to: path.resolve(__dirname, "../"),
        },
      ],
    }),
  ],
});