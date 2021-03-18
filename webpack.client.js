"use strict";

const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack/webpack.common");

const getConfigByEnv = (env) => {
    let config = () => {};

    try {
        config = require(path.join(__dirname, "webpack", `webpack.${env}.js`));
    } catch (ex) {
        throw new Error(ex);
    }

    return config;
};

module.exports = async ({ NODE_ENV, ...webpackOpts }) => {
    const common = commonConfig(webpackOpts);

    const webpackConfig = getConfigByEnv(NODE_ENV)({ NODE_ENV, ...webpackOpts });

    return merge(common, webpackConfig);
};
