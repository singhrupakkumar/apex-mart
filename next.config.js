/*
* Martfury - Multipurpose Marketplace React Ecommerce Template
* Author: nouthemes
* Homepage: https://themeforest.net/user/nouthemes/portfolio
* Created at: 2019-11-15T08:00:00+07:00
* Updated at: 2021-02-03T08:18:23+07:00

* */
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const nextSettings = {
    env: {
        title: 'Apex Mart',
        titleDescription: 'Home',
    },
    optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  },
};

module.exports = withPlugins([withImages(), nextSettings]);
