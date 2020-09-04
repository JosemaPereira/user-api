const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './app',
  devtool: 'source-map',
  target: 'node',
  externals: [
    nodeExternals(),
    { express: 'commonjs express' },
    { require_optional: 'commonjs' },
    { mongoose: 'commonjs mongoose' },
  ],
  optimization: {
    minimize: true,
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: [/node_modules/, /test/],
      },
    ],
  },
};
