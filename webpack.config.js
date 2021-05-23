const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',

  entry: './src/index.ts',

  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },

  output: {
    path: __dirname + '/functions',
    filename: 'index.js',
    libraryTarget: 'commonjs'
  }
};
