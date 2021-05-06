const path = require('path');
const paths = require('./paths.ts');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
console.log('check', process.env.NODE_ENV)

module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            Src: path.resolve(__dirname, '..', 'src'),
            Assets: path.resolve(__dirname, '..', 'assets/'),
            Components: path.resolve(__dirname, '..', 'src/components/'),
            Hooks: path.resolve(__dirname, '..', 'src/hooks'),
            Utils: path.resolve(__dirname, '..', 'src/utils'),
            react: require.resolve('react')
        }
    },
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                exclude: /\.module.(scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.module.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: 'ntt-[local]-[hash:base64:5]',
                            camelCase: true,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                // type: 'asset/resource',
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './images/[contenthash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                // type: 'asset/inline',
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './svg/[contenthash].[ext]'
                        }
                    }
                ]
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './public/index.html'),
        }),
    ],
    stats: {
        children: true
    }
};