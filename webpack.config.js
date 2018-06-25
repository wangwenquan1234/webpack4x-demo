const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'), //必须是绝对路径
        filename: '[name].bundle.js' 
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: path.resolve(__dirname, './src/index.html'),
            title: 'webpack demo'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'), //设置服务器访问的目录
        host: 'localhost', //服务器地址
        port: 8090, //端口
        open: true, //自动打开浏览器
        hot: true, //热更新
    }
}