const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
console.log('process.cwd()', process.cwd());

module.exports = {

    /*入口*/
    entry: {
        // 指定入口，可以指定多个  @babel/polyfill可以让我们愉快的使用浏览器不兼容的es6、es7的API
        main: [
            "@babel/polyfill", path.join(__dirname, '../src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    mode: 'production',
    devtool: 'none',
    /*输出到dist目录，输出文件名字为bundle.js*/
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[name][id].[chunkhash].js'
    },
    plugins: [
        // 删除文件 保留新文件
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({filename: "css/[name].[contenthash].css", chunkFilename: "css/[id].[contenthash].css"}),
        new OptimizeCssAssetsPlugin()
    ],
    optimization: {
        // runtimeChunk: true,
        runtimeChunk: {
            name: 'runtime'
        },
        minimize: true, // true when mode === 'production'
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendor: {
                    test: /node_modules\/(.*)\.js/,
                    name: 'vendor',
                    chunks: 'initial',
                    enforce: true
                },
                styles: {
                    name: 'styles',
                    test: /\.(less|css)$/,
                    chunks: 'all',
                    minChunks: 1,
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, '../src')
            }, {
                test: /\.(css|less)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    }, {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: "[local]--[hash:base64:5]"
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            }, {
                test: /\.(bmp|gif|jpg|jpeg|png|svg)$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "img/[name].[hash:8].[ext]"
                }
            }
        ]
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, '../src/pages'),
            components: path.join(__dirname, '../src/components'),
            router: path.join(__dirname, '../src/router'),
            actions: path.join(__dirname, '../src/redux/actions'),
            reducers: path.join(__dirname, '../src/redux/reducers'),
            images: path.join(__dirname, '../src/images')
        }
    }
};
