const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const fileName = (ext) => (isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`);

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'inline-source-map' : false,
    entry: './index.ts',
    output: {
        filename: `${fileName('js')}`,
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: `assets/[name][ext]`,
        clean: true,
    },
    devServer: {
        open: true,
        port: 8000,
        watchFiles: ['./src/index.html'],
    },
    plugins: [
        /* new FaviconsWebpackPlugin('./assets/favicon.ico'), */
        new MiniCssExtractPlugin({
            filename: `[name].css`,
        }),
        new HTMLWebpackPlugin({
            title: 'migration-to-typescript',
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
                test: /\.[tj]s$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.mp3$/,
                type: 'asset/resource',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};
