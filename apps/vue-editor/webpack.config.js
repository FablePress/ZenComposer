/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const { version, author, license } = require('./package.json');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'zen-composer-vue.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'commonjs2',
    },
    environment: {
      arrowFunction: false,
      const: false,
    },
  },
  externals: {
    '@fablepress/zen-composer': {
      commonjs: '@fablepress/zen-composer',
      commonjs2: '@fablepress/zen-composer',
    },
    '@fablepress/zen-composer/dist/zen-composer-viewer': {
      commonjs: '@fablepress/zen-composer/dist/zen-composer-viewer',
      commonjs2: '@fablepress/zen-composer/dist/zen-composer-viewer',
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin({
      banner: [
        'Zen Composer : Vue Wrapper',
        `@version ${version} | ${new Date().toDateString()}`,
        `@author ${author}`,
        `@license ${license}`,
      ].join('\n'),
    }),
  ],
};
