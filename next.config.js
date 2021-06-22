/*
* Martfury - Multipurpose Marketplace React Ecommerce Template
* Author: nouthemes
* Homepage: https://themeforest.net/user/nouthemes/portfolio
* Created at: 2019-11-15T08:00:00+07:00
* Updated at: 2021-02-03T08:18:23+07:00

* */
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const nextSettings = {
    env: {
        title: 'Apex Mart',
        titleDescription: 'Home',
    },

    module: {
	    rules: [
	      {
	        test: /.s?css$/,
	        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
	      },
	    ],
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },     
};

module.exports = withPlugins([withImages(), nextSettings]);
