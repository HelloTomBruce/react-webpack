const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'

const postCssLoader = {
    loader: 'postcss-loader',
    options: {
        plugins: [require('autoprefixer')]
    }
}

const lessLoader =  {
    loader: 'less-loader',
    options: { javascriptEnabled: true}
}

const cssLoader = (options) => {
    return {
        loader: 'css-loader',
        options: {...options}
    }
}

const MiniCssExtractPluginLoader = (options) => {
    return {
        loader: MiniCssExtractPlugin.loader,
        options: Object.assign({
            publicPath: path.resolve(__dirname, '/src/page/less')
        }, options)
    }
}

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [devMode ? 'style-loader' : MiniCssExtractPluginLoader(), cssLoader({ importLoaders: 1}), postCssLoader]
            },
            {
                test: /\.less$/,
                use: [devMode ? 'style-loader' : MiniCssExtractPluginLoader(), cssLoader({ importLoaders: 2}), postCssLoader, lessLoader]
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                use: ['json-loader']
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            inject: false
        }),
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        })
    ]
}