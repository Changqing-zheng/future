const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require('glob');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        filename:'index.html',
        chunks:['index'],
        minify:{
            removerAttributeQuotes:true
        },
        hash:true,
        template:'./src/index.html'
    }),
    new ExtractTextWebpackPlugin("./css/style.css"),
    new PurifyCSSPlugin({
        paths: glob.sync(path.join(__dirname,'src/*html'))
    }),
    new webpack.BannerPlugin('webpack!'),
    new webpack.ProvidePlugin({
        $:"jquery"
    }),
    new CopyWebpackPlugin([{
        from: __dirname + '../src/public',
        to: './public'
    }])
];
module.exports = plugins;