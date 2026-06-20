/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const { version, author, license } = require('./package.json');

const config = {
  entry: './src/index.ts',
  output: {
    filename: 'zen-composer-react.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'commonjs2',
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
    react: {
      commonjs: 'react',
      commonjs2: 'react',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
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
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: [
        'Zen Composer : React Wrapper',
        `@version ${version} | ${new Date().toDateString()}`,
        `@author ${author}`,
        `@license ${license}`,
      ].join('\n'),
    }),
  ],
};

module.exports = () => config;
