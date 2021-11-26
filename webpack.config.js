const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'assets/js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ejs$/i,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: false
                        },
                    },
                    {
                        loader: 'ejs-plain-loader'
                    }
                ]
            },
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|gif|ico)$/i,
                generator: {
                    filename: 'assets/images/[name][ext][query]'
                },
                type: 'asset/resource'
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/ejs/index.ejs"
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/images', to: 'assets/images' },
            ],
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
}