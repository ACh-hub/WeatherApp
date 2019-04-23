"use strict";
const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './src/js/app.js'],

    output: {
        path: path.resolve(__dirname, "./src/temp/scripts"),
        filename: "app.js"
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
}