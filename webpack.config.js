const path = require('path');
var webpack = require('webpack');
var config = require('./config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// 获取网页配置
const index = config.index;
const html = config.html[index];
// console.log(index)

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: {
    app: html.entry
  },
  output: {
    path: resolve(html.output),
    filename: '[name].[hash].js',
    publicPath:'/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
                loaders: {
                    css: ['vue-style-loader', {
                        loader: 'css-loader',
                        options: {
                            // minimize: process.env.NODE_ENV === 'production',
                            sourceMap: false
                        }
                    }],
                    postcss: [
                        'vue-style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                // minimize: process.env.NODE_ENV === 'production',
                                sourceMap: false
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: false
                            }
                        }
                    ],
                    less: [
                        'vue-style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                // minimize: process.env.NODE_ENV === 'production',
                                sourceMap: false
                            }
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                sourceMap: false
                            }
                        }
                    ]
                }
            }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  }
}