const path = require("path");
const webpack = require("webpack");
const createStyledComponentsTransformer = require("typescript-plugin-styled-components").default;
const config = require("./config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = ({ NODE_DEV_SERVER }) => {
    const isDevServer = NODE_DEV_SERVER != null;
    const contentPath = isDevServer ? `${config.devServer.url}/` : config.appRoot;

    return {
        mode: "development",

        entry: {
            appVendor: config.appVendor,
            app: config.app,
        },

        output: {
            filename: "[name].[hash:8].js",
            chunkFilename: "[name].[hash:8].js",
            publicPath: contentPath + config.relativePaths.script,
            path: config.jsDistPath,
        },

        module: {
            rules: [
                {
                    test: /\.(tsx|ts)?$/,
                    exclude: /node_modules/,
                    loader: "ts-loader",
                    options: {
                        getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
                    },
                },

                {
                    test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: "url-loader",
                    options: {
                        outputPath: "../svg/",
                        publicPath: contentPath + config.relativePaths.svg,
                        name: "[name].[ext]",
                    },
                },

                {
                    test: /\.(png|jp(e*)g|gif)$/,
                    use: [
                        {
                            loader: "url-loader",
                            options: {
                                limit: 10000,
                                outputPath: "../images/",
                                publicPath: contentPath + config.relativePaths.images,
                                name: "[name].[ext]",
                            },
                        },
                    ],
                },
            ],
        },

        plugins: [
            new HtmlWebpackPlugin({
                inject: false,
                minify: false,
                devServer: isDevServer,
                template: path.join(config.templateSrcPath, "index.html"),
                filename: path.join(config.templateDistPath, "index.html"),
            }),
        ],

        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"],
        },
    };
};
