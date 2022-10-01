const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main-[contenthash].css',
    }),
  ],
  output: {
    filename: 'main-[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
});
