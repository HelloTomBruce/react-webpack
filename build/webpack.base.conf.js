const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlIncludeAssetsPlugin = require("html-webpack-include-assets-plugin");
const devMode = process.env.NODE_ENV !== "production";

const postCssLoader = {
    loader:  "postcss-loader",
    options: {
        plugins: [require("autoprefixer")]
    }
};

const lessLoader = {
    loader:  "less-loader",
    options: { javascriptEnabled: true }
};

const cssLoader = options => {
    return {
        loader:  "css-loader",
        options: { ...options }
    };
};

const MiniCssExtractPluginLoader = options => {
    return {
        loader:  MiniCssExtractPlugin.loader,
        options: Object.assign(
            {
                publicPath: path.resolve(__dirname, "/src/page/less")
            },
            options
        )
    };
};

module.exports = {
    entry:  ["./src/index.js"],
    output: {
        filename: "[name].[hash].js",
        path:     path.join(__dirname, "../dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:  [
                    devMode ? "style-loader" : MiniCssExtractPluginLoader(),
                    cssLoader({ importLoaders: 1 }),
                    postCssLoader
                ]
            },
            {
                test: /\.less$/,
                use:  [
                    devMode ? "style-loader" : MiniCssExtractPluginLoader(),
                    cssLoader({ importLoaders: 2 }),
                    postCssLoader,
                    lessLoader
                ]
            },
            {
                test: /\.js$/,
                use:  [
                    {
                        loader: "babel-loader?cacheDirectory"
                    }
                ],
                exclude: /node_modules/,
                include: path.resolve(__dirname, "../src")
            },
            {
                test: /\.json$/,
                use:  ["json-loader"]
            },
            {
                test:    /\.(graphql|gql)$/,
                exclude: /node_modules/,
                use:     [{ loader: "graphql-tag/loader" }]
            }
        ]
    },
    resolve: {
        modules: ["node_modules"],
        alias:   {
            "@": path.resolve(__dirname, "../src")
        },
        extensions: [".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            inject:   false
        }),
        new MiniCssExtractPlugin({
            filename:      devMode ? "[name].css" : "[name].[hash].css",
            chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
        }),
        new webpack.DllReferencePlugin({
            manifest: require("../dist/react.manifest.json")
        }),
        new HtmlIncludeAssetsPlugin({
            assets: ["react.dll.js"],
            append: false
        })
    ]
};
