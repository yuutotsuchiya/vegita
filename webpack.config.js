const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',

  entry: {
    'app': './src/js/index.js',
  },
  output: {
    path: path.join(__dirname, 'public/'),
    publicPath: '/',
    filename: `js/[name].js`,
  },
  devtool: process.env.NODE_ENV === 'development' && 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              url: false,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-preset-env')({
                  stage: 0
                }),
                require('autoprefixer')
              ]
            }
          },
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `css/[name].css`,
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    disableHostCheck: true,
    port: 3000,
  }
}