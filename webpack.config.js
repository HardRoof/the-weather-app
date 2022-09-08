const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    assetModuleFilename: "[name][ext]",
    clean: true,
  },
  devtool: "inline-source-map",

  // Loaders
  module: {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.(svg|ico|jpg|jpeg|png|gif|webp)$/i, type: "asset/resource" },
      { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: "asset/resource" },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: { loader: "babel-loader", options: { presets: ["@babel/preset-env"] } },
      },
    ],
  },
  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      filename: "index.html",
      template: path.resolve(__dirname, "src/temp.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/images", to: "images/" }, // Will create/copy an images/ in dist/
      ],
    }),
  ],
};
