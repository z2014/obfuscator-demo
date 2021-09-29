const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  // mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.ts?$/, loader: "ts-loader" }
    ]
  },
  optimization: {
    chunkIds: 'named',
    minimize: true,
    // minimizer: [new TerserPlugin({
    //   terserOptions: {
    //     compress: true,
    //   },
    // })],
  },
  resolve: {
    extensions: ['.wasm', '.ts', '.js', '.json'],
  },
};