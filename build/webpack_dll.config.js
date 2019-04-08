const path = require("path")
const webpack = require("webpack")

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
    path:          path.resolve(__dirname, "../dist"),
    libraryTarget: "var",
    library:       "dll_[name]_[hash]"
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, "../dist", "[name].manifest.json"),
      name: "dll_[name]_[hash]"
    })
  ]
}
