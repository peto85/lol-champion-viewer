var path = require('path');

var ENTRY_POINT = path.resolve(__dirname, 'app/index.js');
var APP_DIR = path.resolve(__dirname, 'app');
var BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = {
    entry: {
      app: [ENTRY_POINT]
    },
    output: {
        path: BUILD_DIR,
        filename: "bundle.js",
        publicPath: "/assets/"
    },
    module: {
        loaders: [
            {
              loader: 'babel',

              // Ignore everything outside the app directory
              include: [
                APP_DIR
              ],

              // Parse .js and .jsx files
              test: /\.jsx?$/,

              // Options for babel
              query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'react']
              }
            }
        ]
    }
};
