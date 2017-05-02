const path = require('path')

module.exports = {
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
  },
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.(js|view)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [require.resolve('babel-preset-react-app')],
          cacheDirectory: true,
        },
      },
      {
        test: /\.view$/,
        exclude: /(node_modules)/,
        loader: 'views-loader',
        options: {
          compile: false,
          map: {
            Time: 'react-time',
          },
          src: `${__dirname}`,
        },
      },
    ],
  },

  output: {
    filename: 'app.js',
    publicPath: '/',
  },
}
