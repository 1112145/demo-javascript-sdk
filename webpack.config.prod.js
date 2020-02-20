const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'sdk.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                      "@babel/plugin-proposal-class-properties"
                    ]
                ]
            }
        }
    ]
}
};