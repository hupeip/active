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
    filename: '[name].js',
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

// module.exports = {
// 	entry: {
// 		app: "./src/main"
// 	},
// 	output: {
// 		path: path.resolve(__dirname, "dist"),
// 		filename: "[name].js",
// 		publicPath: "/"
// 	},
// 	resolve: {
//         extensions: ['.css', '.js', '.vue'],
//         modules: ["node_modules", path.resolve(__dirname, "src")],
//         alias: {
//         	'vue$': 'vue/dist/vue.esm.js',
//             '@': path.resolve(__dirname, "src")
//         }
//     },
// 	module: {
// 		rules: [{
// 			test: /\.(js|vue)$/,
//             loader: 'eslint-loader',
//             enforce: "pre",
//             include: [path.resolve(__dirname, 'src')],
//          //    exclude: [
// 	        //   path.resolve(__dirname, "node_modules")
// 	        // ],
//             options: {
//                 formatter: require("eslint-friendly-formatter")
//             }
//         },
//         {
//             test: /\.vue$/,
//             loader: 'vue-loader',
//             options: {
//             	loaders: {
//             		css: ['vue-style-loader', {
//             			loader: 'css-loader',
// 				        options: {
// 				            // minimize: process.env.NODE_ENV === 'production',
// 				            sourceMap: false
// 				        }
//             		}],
//             		postcss: [
//             			'vue-style-loader',
//             			{
//             				loader: 'css-loader',
// 				        	options: {
// 					            // minimize: process.env.NODE_ENV === 'production',
// 					            sourceMap: false
// 				        	}
// 	            		},
// 	            		{
// 			                loader: 'postcss-loader',
// 			                options: {
// 			                	sourceMap: false
// 			                }
// 		                }
//             		],
//             		less: [
//             			'vue-style-loader',
//             			{
//             				loader: 'css-loader',
// 				        	options: {
// 				            	// minimize: process.env.NODE_ENV === 'production',
// 				            	sourceMap: false
// 				        	}
// 	            		},
// 	            		{
// 			                loader: 'less-loader',
// 			                options: {
// 			                	sourceMap: false
// 			                }
// 		                }
//             		]
//             	}
//             }
//         },
//         {
//             test: /\.js$/,
//             loader: 'babel-loader',
//             include: [path.resolve(__dirname, 'src')]
//         },
//         {
//             test: /\.less$/,
//             include: [path.resolve(__dirname, 'src/asset')],
//             exclude: [/node_modules/],
//             use: ExtractTextPlugin.extract({
//                 use: ['css-loader', 'less-loader'],
//                 fallback: 'style-loader'
//             })
//         },
//         {
//             test: /\.css$/,
//             include: [path.resolve(__dirname,'src/asset')],
//             exclude: [/node_modules/],
//             use: ExtractTextPlugin.extract({
//                 use: ['css-loader'],
//                 fallback: 'style-loader'
//             })
//         },      
//         {
//             test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
//             use: [
//              {
//                  loader: 'url-loader',
//                  query: {
//                         limit: 1,
//                         name: 'images/[name].[hash:7].[ext]'
//                     }
//              },
//              {
//                     loader: 'image-webpack-loader',
//                     query: {
//                       progressive: true,
//                       optimizationLevel: 7,
//                       interlaced: false,
//                       pngquant: {
//                         quality: '65-90',
//                         speed: 4
//                       }
//                     }
//                 }

//             ]
//         },
//         {
//             test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
//             loader: 'url-loader',
//             query: {
//                 limit: 10000,
//                 name: 'fonts/[name].[hash:7].[ext]'
//             }
//         }
//         ]
// 	},
// 	plugins: [
// 		new webpack.DefinePlugin({
//             'process.env': JSON.stringify('devlopment')
//         }),
//         new ExtractTextPlugin({
//             filename: 'css/[name].css',
//             allChunks: true
//         }),
//         new webpack.HotModuleReplacementPlugin(),
//         new webpack.NoEmitOnErrorsPlugin(),
//         new OptimizeCSSPlugin(),
//         // https://github.com/ampedandwired/html-webpack-plugin
//         new HtmlWebpackPlugin({
//             filename: 'index.html',
//             template: 'index.html',
//             inject: true
//         }),
//         new FriendlyErrorsPlugin()
// 	],
// 	devtool: '#eval-source-map'
// }