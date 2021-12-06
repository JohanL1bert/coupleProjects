const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
    },
    devServer: {
        open: true,
        port: 8000,
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/'),
                    to: path.resolve(__dirname, 'dist'),
                    noErrorOnMissing: true,
                    globOptions: {
                        ignore: ['**/index.html', '**/*.ts', '**/*.scss', '**/*.woff2', '**/*.css'],
                    },
                },
            ],
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true,
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
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};
