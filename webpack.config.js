const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js', // Исходный файл вашего приложения
  output: {
    path: path.resolve(__dirname, 'dist'), // Каталог для результатов сборки
    filename: 'bundle.js' // Имя файла с результатами сборки
  },
  module: {
    rules: [
      { test: /.vue$/, loader: 'vue-loader' },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      // Добавление правила для обработки .scss файлов
      {
        test: /.scss$/,
        use: [
          'vue-style-loader', // создает стили из JS строк
          'css-loader',      // переводит CSS в CommonJS
          'sass-loader'      // компилирует Sass в CSS, используя Node Sass по умолчанию
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
};
