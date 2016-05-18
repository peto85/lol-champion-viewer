var path = require('path');
var fs = require('fs');

var CLIENT_ENTRY_POINT = path.resolve(__dirname, 'app/client/entry.js');
var SERVER_ENTRY_POINT = path.resolve(__dirname, 'app/server/server.js');

var CLIENT_DIR = path.resolve(__dirname, 'app/client');
var SERVER_DIR = path.resolve(__dirname, 'app/server');

var CLIENT_OUTPUT_DIR = path.resolve(__dirname, 'public/js');
var SERVER_OUTPUT_DIR = path.resolve(__dirname, 'build');

var NODE_MODULES_DIR = path.resolve(__dirname, 'node_modules');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = [
  // webpack config object used for the client
  {
    name: 'client',
    entry: {
      app: [CLIENT_ENTRY_POINT]
    },
    output: {
        path: CLIENT_OUTPUT_DIR,
        filename: "clientBundle.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
              loader: 'babel',

              // Ignore everything outside the app directory
              include: [
                CLIENT_DIR
              ],

              exclude: [
                NODE_MODULES_DIR
              ],

              // Parse .js and .jsx files
              test: /\.jsx?$/,

              // Options for babel
              query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'react', 'stage-1']
              }
            }
        ]
    }
  },
  // webpack config object used for the server
  {
    name: 'server',
    target: 'node',
    devtool: 'source-map',
    entry: {
      server: [SERVER_ENTRY_POINT]
    },
    output: {
        path: SERVER_OUTPUT_DIR,
        filename: "serverBundle.js"
    },
    externals: nodeModules,
    module: {
        loaders: [
            {
              loader: "json-loader",

              test: /\.json$/
            },
            {
              loader: 'babel',

              // Ignore everything outside the app directory
              include: [
                SERVER_DIR
              ],
              exclude: [
                NODE_MODULES_DIR
              ],

              // Parse .js files
              test: /\.js$/,

              // Options for babel
              query: {
                plugins: ['transform-runtime'],
                presets: ['es2015']
              }
            }
        ]
    }
  }
];
