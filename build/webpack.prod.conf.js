const merge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const baseConfig = require('./webpack.base.conf.js')

module.exports = merge(baseConfig, {
    mode: 'production',
    plugins: [
        new BundleAnalyzerPlugin()
    ]
})