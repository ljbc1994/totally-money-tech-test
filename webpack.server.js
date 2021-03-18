const path = require("path");
const webpack = require("webpack");
const config = require("./webpack/config");
const DefinePlugin = webpack.DefinePlugin;

module.exports = ({ NODE_SSR_ENABLED }) => {
    return {
        mode: "production",

        target: "node",

        entry: {
            server: config.server,
        },

        output: {
            filename: "index.js",
            path: config.distPath,
        },

        module: {
            rules: [
                {
                    test: /\.(tsx|ts)?$/,
                    exclude: /node_modules/,
                    loader: "ts-loader",
                },
            ],
        },

        plugins: [
            new DefinePlugin({
                NODE_SSR_ENABLED: NODE_SSR_ENABLED,
                "process.env.NODE_SSR_ENABLED": NODE_SSR_ENABLED,
            }),
        ],

        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"],
        },
    };
};
