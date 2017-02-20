const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname),
  entry: './src/client/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/assets'),
    publicPath: 'assets'
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
        fallback: 'style-loader',
        use: {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[local]__[name]__[hash:base64:5]'
          }
        }
      })
    },{
      test: /\.jpeg$/,
      exclude: /node_modules/,
      // use: 'file-loader?publicPath=images/&outputPath=images/'
      use: {
        loader: 'file-loader',
        options: {
          publicPath: 'images/',
          outputPath: 'images/'
        }
      }
    }]
  },
  resolve: {
    extensions: ['.js','.jsx']
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
};
