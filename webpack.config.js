const path = require("path");
const webpack = require("webpack");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    hotOnly: true,
    port: 3000,
    publicPath: "http://localhost:3000/dist/"
  },
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: { extensions: ["*", ".js", ".jsx"] }
};