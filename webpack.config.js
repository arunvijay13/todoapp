const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js',
      publicPath: '/',
   },
   devServer: {
      inline: true,
      port: 8001,
      historyApiFallback: true
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['@babel/preset-env','@babel/preset-react'],

            }
         },
         {
            test:/\.css$/,
            use:['style-loader','css-loader']
         },
         {
            test:/\.(png|jpg|gif)?$/,
            use:'file-loader'
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}