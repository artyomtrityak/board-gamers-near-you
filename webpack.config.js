var webpack = require('webpack'),
    path = require('path');

var VENDOR_LIBS = [
    'react',
    'react-router',
    'flux',
    'immutable',
    'jquery',
    'bluebird',
    'eventemitter2',
    'classnames',
    'leaflet',
    'parse'/*,
    'react-intl'*/
];

module.exports = {
    entry: {
        app: './app/javascript/routes.jsx',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(__dirname, '/app/build'),
        filename: "bundle.js",
        publicPath: 'http://localhost:8080/app/build/',
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        modulesDirectories: ['node_modules'],
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(
            /* chunkName= */"vendor", /* filename= */"vendor.bundle.js"
        )
    ],
    devtool: 'source-map' // source maps with debugging, slow
    //devtool: 'eval-source-map'
};