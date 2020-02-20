const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'sdk.js',
    path: path.resolve(__dirname, 'example'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'example'),
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'template/example.html')
    })
  ],
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
                    ],
                   
                ]
            }
        }
    ]
}
};