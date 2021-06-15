const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'production',
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./dist"),
          to: path.resolve(__dirname, "../"),
        },
      ],
    }),
  ],
};