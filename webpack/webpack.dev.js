const config = require("./config");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const DefinePlugin = webpack.DefinePlugin;

module.exports = ({ NODE_DEV_SERVER, NODE_SSR_ENABLED }) => {
    const isDevServer = NODE_DEV_SERVER != null;

    const publicPath = isDevServer ? config.devServer.contentPath : `${config.appRoot}${config.relativePaths.app}`;

    return {
        mode: "development",

        output: {
            filename: "[name].js",
            publicPath: publicPath,
            path: config.jsDistPath,
        },

        devServer: {
            contentBase: config.devServer.contentBase,
            port: config.devServer.port,
            publicPath: config.devServer.publicPath,
            hot: true,
            https: false,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
            },
        },

        plugins: [
            new DefinePlugin({
                "process.env.NODE_SSR_ENABLED": NODE_SSR_ENABLED,
            }),

            new webpack.HotModuleReplacementPlugin(),

            !isDevServer
                ? new CleanWebpackPlugin({
                      dry: true,
                      cleanOnceBeforeBuildPatterns: config.cleanOptions,
                      verbose: true,
                  })
                : undefined,
        ].filter(Boolean),
    };
};
