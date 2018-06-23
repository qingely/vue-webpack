// 使用绝对路径
const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
    target: 'web',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    //文件解析处理
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [ // 'use'键配置多个loader 
                    'style-loader', // 把css文件写入到js里面
                    'css-loader'
                ]
            },
            {
                test: /\.(gif|jpg|jpge|png|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name]-aaa.[ext]'
                    }
                }]
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'stylus-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"' // 注意引号不能少
            }
        }),
        new VueLoaderPlugin(),
        new HTMLPlugin()
    ]
}

if (isDev) {
    config.devtool = '#cheap-module-evel-source-map' // 方便调试时仍然是ES6的代码
    config.devServer = {
            port: 8080,
            host: '127.0.0.1',
            overlay: {
                errors: true, // 是否在终端显示错误信息
            },
            // open: true, // 是否自动启动浏览器
            hot: true // 是否启用热加载模式（需配置插件）
        },
        config.plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        )
}

module.exports = config