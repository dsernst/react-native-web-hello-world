// webpack.config.js

module.exports = {
  entry: "./app.js",
  output: {
      path: __dirname,
      filename: "bundle.js"
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web/core'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
}
