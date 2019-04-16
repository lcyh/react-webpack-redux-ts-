const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPluin = require('friendly-errors-webpack-plugin');
// const theme = require('../src/themes/default.less');


module.exports = {

    /*入口*/
    entry: {
        main: ["@babel/polyfill",path.join(__dirname, '../src/index.js')], // 指定入口，可以指定多个
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    /*输出到dist目录，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    plugins: [new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html',
            // 压缩 去掉所有空格
            minify: {
                collapseWhitespace: true //false | true
            }
        }),
        new FriendlyErrorsPluin()
    ],
    //设置webpack本地服务器的配置
    devServer: {
        // contentBase: path.join(__dirname, '../dist'),  HtmlWebpackPlugin
        // //默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器
        compress: true, // gzip压缩
        host: 'localhost', // 允许ip访问
        hot: true, // 热更新
        inline: true, //设置为true，当源文件改变的时候会自动刷新
        historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html  // 解决启动后刷新404
        port: 9000, // 端口
        stats: 'errors-only',
        proxy: { // 配置服务代理
            '/api': {
                target: 'http://localhost:9000',
                pathRewrite: {
                    '^/api': ''
                }, //可转换
                changeOrigin: true //允许跨域
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js|.jsx$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, '../src')
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
             {
                test: /\.(css|less)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
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
                            javascriptEnabled: true,
                            modifyVars:{
                                // 'primary-color':'#333'
                            }
                        }
                    }
                ]
            },  {
                test: /\.(css|less)$/,
                include: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader',
                        options: {}
                    }, {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                            modifyVars:{
                                // 'primary-color':'#333'
                            }
                        }
                    }
                ]
            },{
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
            utils: path.join(__dirname, '../src/utils'),
            actions: path.join(__dirname, '../src/redux/actions'),
            reducers: path.join(__dirname, '../src/redux/reducers'),
            images: path.join(__dirname, '../src/images')
        },
        extensions: [".js", "jsx", ".ts", ".tsx", ".json" ],
        modules:[path.resolve(__dirname, '../node_modules')]
    }
};
