var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
    entry: APP_DIR + '/main.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            riot: 'riot'
        })
    ],
    module : {
        //This pre-loader code is blatently copied from the reference for riotjs-loader.
        preLoaders: [
            {
                test: /\.tag$/,
                exclude: /node_modules/,
                loader: 'riotjs-loader',
                query: { type: 'none' }
            }
        ],
        loaders : [
            {
                test : /\.js$|\.tag$/,
                include : APP_DIR,
                loader : 'babel'
            }
        ]
    }
};

module.exports = config;
