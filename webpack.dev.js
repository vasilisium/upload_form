const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    hot: true,
  },
};