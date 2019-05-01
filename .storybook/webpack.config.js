const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const lessLoader = {
    loader: "less-loader",
    options: { javascriptEnabled: true }
};

const postCssLoader = {
    loader: "postcss-loader",
    options: {
        plugins: [require("autoprefixer")]
    }
};

const cssLoader = options => {
    return {
        loader: "css-loader",
        options: { ...options }
    };
};

module.exports = {
    plugins: [
        // your custom plugins
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    cssLoader({ importLoaders: 2 }),
                    postCssLoader,
                    lessLoader
                ]
            }
        ]
    }
};
