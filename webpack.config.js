const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                exclude: /node_modlues/,
                loader: 'babel-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts'],
    }
};
