const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackCdnPlugin = require('html-webpack-cdn-plugin');

const babel_options = { presets: ['es2015', { modules: false }] }

module.exports = {
  entry: {
    app: `${__dirname}/src/index.js`
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'gutenberg-example',
      template: 'src/assets/templates/index.html'
    }),
    new webpack.ProvidePlugin({ riot: 'riot' })
  ],
  resolve: {
    root: [
      path.resolve('./src/'),
      path.resolve('./node_modules/')
    ],
    alias: {
      images: path.resolve(__dirname, 'src/assets/images/')
    }
  },
  module: {
    rules: [
      {
        test: /\.tag$/,
        use: [
          {
            loader: 'riot-tag-loader',
            options: { debug: true }
          }
        ],
        enforce: 'pre',
        exclude: /node_modules/
      },
      {
        test: /\.js$|\.tag$/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: `es2015-riot` }
          }
        ],
        enforce: 'post',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(ttf|eot|svg|jpe?g|png|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: "file-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.tag', '.css']
  },
  devtool: "#source-map"
}
