const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/client/index.jsx',
  output: {
    filename: 'bundle.js',
    path: './public/build'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015','react','stage-0']
        }
      }
    },{
      test: /\.css/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[local]__[name]__[hash:base64:5]'
          }
        }
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin('./styles.css')
  ]
};
