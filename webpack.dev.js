const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // resolve: {
  //   root: [  // older webpack config
  //       path.join(__dirname, '/src'),  // source at ./js-src/
  //   ]
  // },
  devtool: "source-map",
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/static/js-build'),  // compile to ./static/js-build
    devtoolModuleFilenameTemplate: 'file:///[absolute-resource-path]'  // map to source with absolute file path not webpack:// protocol
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    hot: true,
    port: 5000,
  },
});