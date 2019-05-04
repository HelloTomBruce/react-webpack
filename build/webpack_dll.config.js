const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        react: [
            "react",
            "react-dom",
            "react-router-dom",
            "react-redux",
            "redux",
            "redux-saga",
            "axios"
        ]
    },
    output: {
        filename:      "[name].dll.js",
        path:          path.resolve(__dirname, "../dist/assets/dll"),
        libraryTarget: "var",
        library:       "dll_[name]_[hash]"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(
                __dirname,
                "../dist/assets/dll",
                "[name].manifest.json"
            ),
            name: "dll_[name]_[hash]"
        })
    ]
};
