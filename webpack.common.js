const path = require('path');
var packageJson = require('./package.json');

module.exports = {
    entry: {
        Logger: './src/log-manager.js'
    },
    output: {
        filename: 'j[name].js'.toLowerCase(),
        path: path.resolve(__dirname, 'dist'),
        libraryExport: "default",
        library: "[name]",
        libraryTarget: "umd",
    }, module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
            options: {
                presets: ["env"]
            }
        }]
    }, resolve: {
        modules: ["node_modules"],
        alias: {
            jDB: path.resolve(__dirname, 'path/to/file.js')
        }
    }
}