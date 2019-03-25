const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')
require('dotenv').config()

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: process.env.PORT,
        host: process.env.HOST
    }
})