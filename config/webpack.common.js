var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {

    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    output: {
        path: helpers.root('dist'),
        publicPath: 'http://localhost:8080/',
        filename: './dist/[name].js',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style', // backup loader when not building .css file
                    'css!sass' // loaders to preprocess CSS
                )
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills'],
        }),

        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};