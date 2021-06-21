/*
* Martfury - Multipurpose Marketplace React Ecommerce Template
* Author: nouthemes
* Homepage: https://themeforest.net/user/nouthemes/portfolio
* Created at: 2019-11-15T08:00:00+07:00
* Updated at: 2021-02-03T08:18:23+07:00

* */
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextSettings = {
    env: {
        title: 'Apex Mart',
        titleDescription: 'Home',
    },
    optimization: {
      minimize: true,  
   },
};

module.exports = withPlugins([withImages(), nextSettings]);
