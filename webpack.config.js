const path = require("path");

module.exports = {
    mode: 'development',
    entry: "./src/index.ts",
    resolve: {
        extensions: [
            '.json',
            '.ts',
            '.js'
        ]
    },
    output: {
        library: 'response',
        libraryExport: 'default',
        libraryTarget: 'var',
        filename: 'test.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            }, {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
        ]
    },
    plugins: []
};