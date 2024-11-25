const path = require('path');

module.exports = {
  mode: 'development', // Hoặc 'production'
  entry: './src/index.js',  // Đường dẫn đến file entry
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Xử lý các tệp .js và .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Sử dụng preset cho React
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Cho phép Webpack xử lý tệp .jsx
  },
};
