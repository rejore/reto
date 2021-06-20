const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
            },
          ],
        },
        {
          test: /\.(s*)css$/,
          use: [
            {
                loader: MiniCssExtractPlugin.loader,
            },
            "css-loader", 
            "resolve-url-loader",
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
        ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            { loader: "file-loader", options: { name: "assets/[hash].[ext]" } },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "assets/[name].css",
      }),
      new NodePolyfillPlugin()
    ],
  };
