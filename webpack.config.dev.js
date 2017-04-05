var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var WebpackConfig = require('./webpack.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./config');

// 获取网页配置
const index = config.index;
const html = config.html[index];
const description = html.description;

module.exports = merge(WebpackConfig, {
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify('devlopment')
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new OptimizeCSSPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            title: description.title,
            key: description.key,
            desc: description.desc,
            inject: true
        }),
        new FriendlyErrorsPlugin()
    ]
})
