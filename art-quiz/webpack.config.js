const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const fileName = (ext) =>
  isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: isDev ? "development" : "production",
  devtool: isDev ? "inline-source-map" : false,
  entry: {
    main: "./index.js",
  },
  output: {
    filename: `${fileName(".js")}`,
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: `assets/[name][ext]`,
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    open: true,
    compress: true,
    hot: true,
    port: 8000,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].css`,
    }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src"),
          to: path.resolve(__dirname, "dist"),
          noErrorOnMissing: true,
          globOptions: {
            ignore: ["**/index.html", "**/*.js", "**/*.sass", "**/*.woff2"],
          },
        },
      ],
    }),
    new HTMLWebpackPlugin({
      title: "art-quiz",
      template: path.resolve(__dirname, `./src/index.html`),
      filename: `index.html`,
      minify: {
        collapseWhitespace: isProd,
      },
    }),
  ],
  module: {
    rules: [
      {
        /*             test: /\.[tj]s$/,
            use: ['eslint-loader'],
            exclude: /node_modules/, */
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
