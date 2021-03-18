const webpack = require("webpack");
const config = require("./config");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const DefinePlugin = webpack.DefinePlugin;

module.exports = ({ NODE_SSR_ENABLED }) => {
    return {
        mode: "production",

        devtool: "source-map",

        optimization: {
            minimizer: [new TerserPlugin()],
            splitChunks: {
                cacheGroups: {
                    commons: {
                        name: "commons",
                        chunks: "all",
                        minChunks: 2,
                    },
                },
            },
        },

        plugins: [
            /**
             * Set mode to production for production build
             * of webpack and react et al.
             */
            new DefinePlugin({
                PRODUCTION: JSON.stringify(true),
                NODE_SSR_ENABLED: NODE_SSR_ENABLED,
                "process.env.NODE_ENV": JSON.stringify("production"),
                "process.env.NODE_SSR_ENABLED": NODE_SSR_ENABLED,
            }),

            new MiniCssExtractPlugin({
                filename: "../css/[name].[hash:8].min.css",
                chunkFilename: "[id].[hash:8].css",
            }),

            /**
             * Clean the distribution folder before generating
             * dist files.
             */
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: config.cleanOptions,
                verbose: true,
            }),
        ],
    };
};
