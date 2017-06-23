const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "style.css",
    disable: process.env.NODE_ENV === "development"
});

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'babel-preset-env']
        },
        exclude: /(node_modules|bower_components)/
      },{
        test: /\.scss$/,
        use: extractSass.extract({
            use: [{
                loader: 'css-loader',
                options: {
                  minimize: true
                }
            }, {
                loader: 'sass-loader'
            }],
            // use style-loader in development
            fallback: 'style-loader'
        })
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
      extractSass
  ]
}

module.exports = config;