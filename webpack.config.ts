import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const webpackConfig = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: require.resolve('babel-loader'),
                    options: {
                      presets: [
                        '@babel/react',
                        [
                          '@babel/preset-env',
                          {
                            useBuiltIns: 'usage',
                            corejs: '3.8',
                            bugfixes: true,
                          },
                        ],
                        '@babel/preset-typescript',
                      ]
                    },
                },
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
    })],
}

export default webpackConfig;