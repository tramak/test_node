const path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var nodeExternals = require('webpack-node-externals');
const autoprefixer = require('autoprefixer');

var isProduction = process.env.NODE_ENV === 'production';
var productionPluginDefine = isProduction ? [
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}})
] : [];
// var clientLoaders = isProduction ? productionPluginDefine.concat([
//     new webpack.optimize.DedupePlugin(),
//     new webpack.optimize.OccurrenceOrderPlugin(),
//     new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, sourceMap: false })
// ]) : [];

// var commonLoaders = [
//     {
//         test: /\.json$/,
//         loader: 'json-loader'
//     }
// ];

var SRC = path.resolve(__dirname, 'src');

var rules = [
  {
    test: /\.js|\.jsx$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [[
          "@babel/preset-env", {
            "targets": {
              "node": "current"
            }
          }
        ], '@babel/preset-react'],
        plugins: [
          "@babel/plugin-proposal-class-properties",
          "@babel/plugin-syntax-dynamic-import"
        ]
      }
    }
  },
  {
    test: /\.(ttf|eot|svg|gif|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    include: SRC,
    use: [{
      loader: 'file-loader',
      options: {
        context: './src'
      }
    }]
  }
];

module.exports = [
  {
    entry: {
      server: './src/server.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "[name].js",
      libraryTarget: 'commonjs2',
      publicPath: '/'
    },
    target: 'node',
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false
    },
    resolve: {
      modules: [SRC, 'node_modules']
    },
    externals: nodeExternals(),
    plugins: productionPluginDefine,
    module: {
      rules: rules
    },
    devtool: 'eval-source-map',
  },
  {
    entry: {
      browser: './src/app/browser.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist/assets'),
      filename: "[name].js",
    },
    resolve: {
      modules: [SRC, 'node_modules']
    },
    performance: { hints: false },
    module: {
      rules: rules
    },
    devtool: 'eval-source-map',
  }
];