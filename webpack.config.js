var path = require('path');
var fs = require('fs');

var CLIENT_ENTRY_POINT = path.resolve(__dirname, 'app/client/entry.js');
var SERVER_ENTRY_POINT = path.resolve(__dirname, 'app/server/server.js');

var CLIENT_DIR = path.resolve(__dirname, 'app/client');
var SERVER_DIR = path.resolve(__dirname, 'app/server');

var CLIENT_OUTPUT_DIR = path.resolve(__dirname, 'public/js');
var SERVER_OUTPUT_DIR = path.resolve(__dirname, 'build');

var NODE_MODULES_DIR = path.resolve(__dirname, 'node_modules');

var IMG_DIR = path.resolve(__dirname, 'public/img');

// To be able to use babel in node environments, this was needed
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
              // Babel loader to transpile ES6/7 JS to commmon JS
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
            },
            {
              // CSS loader to use react-css-modules
              test: /\.css$/,
              include: [
                CLIENT_DIR
              ],
              exclude: [
                NODE_MODULES_DIR
              ],
              loaders: [
                'style?sourceMap',
                'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
              ]
            },
            {
              // SVG to React component loader
              test: /\.svg$/,
              include: [
                IMG_DIR
              ],
              loaders: [
                'babel',
                'react-svg?es5=1'
              ]
            },
            {
                test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
                loader: 'imports?define=>false&this=>window'
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
                presets: ['es2015', 'stage-1']
              }
            }
        ]
    }
  }
];
