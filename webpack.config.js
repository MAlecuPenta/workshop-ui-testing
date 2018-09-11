const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'lib');
const ENTRY = path.resolve(APP_DIR, 'index.jsx');

const devPort = 3020;

module.exports = (env, args) => {
    const ENV = args.mode || 'development';

    /* eslint-disable  no-process-env */
    const devHost = process.env.WEBPACK_DEV_IP || '0.0.0.0';
    /* eslint-enable  no-process-env */

    return {
        devtool: 'eval-source-map',
        entry: { main: ['babel-polyfill', ENTRY] },
        output: {
            path: BUILD_DIR,
            publicPath: '/',
            filename: '[name].[hash].js',
            crossOriginLoading: 'anonymous'
        },
        module: {
            rules: [
                {
                    test: /\.js(x)?$/,
                    include: [APP_DIR],
                    loader: 'babel-loader'
                },
                {
                    test: /.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            compress: true,
            port: devPort,
            host: devHost,
            disableHostCheck: true,
            historyApiFallback: true,
            watchOptions: { ignored: /node_modules/ }
        },
        resolve: { extensions: ['.js', '.jsx'] },
        plugins: [
            new webpack.DefinePlugin({
                'global.__ENV__': `'${ENV}'`,
                'process.env.NODE_ENV': `'${ENV}'`
            }),
            new HtmlWebpackPlugin({
                publicPrefix: '',
                hash: true,
                template: './index.dev',
                inject: false
            }),
            new webpack.HashedModuleIdsPlugin()
        ],
        optimization: { splitChunks: { chunks: 'all' } }
    };
};
