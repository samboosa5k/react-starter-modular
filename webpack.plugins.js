const webpack = require('webpack');
const { inDev } = require('./webpack.helpers');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { DefinePlugin, HotModuleReplacementPlugin } = webpack;

module.exports = [
    new ForkTsCheckerWebpackPlugin(),
    inDev() && new HotModuleReplacementPlugin(),
    inDev() && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: 'public/index.html',
        inject: true,
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[chunkhash].css',
        chunkFilename: '[name].[chunkhash].chunk.css',
    }),
    new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new DefinePlugin({
        'process.env.APP_PATH': JSON.stringify(process.env.APP_PATH),
    }),
].filter(Boolean);
