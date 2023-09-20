const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
require("dotenv").config();

module.exports = {
  entry: "./src/index.js",
  resolve: {
    fallback: {
      util: require.resolve("util/"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      url: require.resolve("url/"),
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/styles.css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public/assets"),
          to: path.resolve(__dirname, "dist/assets"),
        },
      ],
    }),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new webpack.DefinePlugin({
      "process.env.REACT_APP_API_END_POINT": JSON.stringify(
        process.env.REACT_APP_API_END_POINT
      ),
      "process.env.REACT_APP_JWT_PUBLICK_KEY": JSON.stringify(
        process.env.REACT_APP_JWT_PUBLICK_KEY
      ),
      "process.env.REACT_APP_GOOGLE_MAP_KEY": JSON.stringify(
        process.env.REACT_APP_GOOGLE_MAP_KEY
      ),
      "process.env.REACT_STRIPE_PUBLISHABLE_KEY": JSON.stringify(
        process.env.REACT_STRIPE_PUBLISHABLE_KEY
      ),
      "process.env.REACT_PAYPAL_CLIENT_ID": JSON.stringify(
        process.env.REACT_PAYPAL_CLIENT_ID
      ),
      "process.env.REACT_GOOGLE_MAP_PLACE_KEY": JSON.stringify(
        process.env.REACT_GOOGLE_MAP_PLACE_KEY
      ),
    }),
  ],
  devServer: {
    port: process.env.REACT_APP_PORT,
    allowedHosts: ["all"],
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|.carousel.min.js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader",
        options: {
          name: "assets/[name].[hash:8].[ext]",
          limit: false,
        },
      },
    ],
  },
};
