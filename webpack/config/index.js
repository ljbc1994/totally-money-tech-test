const path = require("path");

const rootPath = path.resolve(__dirname, "../../");
const srcPath = path.resolve(__dirname, "../../client");
const srcServerPath = path.resolve(__dirname, "../../server");
const distPath = path.resolve(__dirname, "../../dist");
const jsDistPath = path.join(distPath, "assets", "js");
const cssDistPath = path.join(distPath, "assets", "css");
const templateSrcPath = path.join(srcPath, "templates");
const templateDistPath = path.join(distPath, "assets", "views");

module.exports = {
    /**
     * App root
     */
    appRoot: "/",

    /**
     * The app root
     */
    app: path.join(srcPath, "index.tsx"),

    /**
     * The third-party scripts required.
     */
    appVendor: ["react", "react-dom", "react-router-dom"],

    /**
     * The server
     */
    server: path.join(srcServerPath, "index.tsx"),

    /**
     * The webpack-dev-server options
     */
    devServer: {
        contentBase: "./assets",
        url: "http://localhost:8081",
        publicPath: "/assets/",
        contentPath: "http://localhost:8081/assets/",
        compress: true,
        port: 8081,
    },

    /**
     * Clean options
     */
    cleanOptions: [jsDistPath, cssDistPath],

    relativePaths: {
        script: "js/",
        fonts: "fonts/",
        svg: "svg/",
        images: "images/",
    },

    rootPath,

    srcPath,

    distPath,

    jsDistPath,

    cssDistPath,

    templateSrcPath,

    templateDistPath,
};
