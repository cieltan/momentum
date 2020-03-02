const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "src"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".js", ".jsx", ".css"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                ],
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: "src/manifest.json",
                transform: function(content, path) {
                    return Buffer.from(
                        JSON.stringify({
                            version: process.env.npm_package_version,
                            ...JSON.parse(content.toString()),
                        })
                    );
                },
            },
        ]),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        }),
    ],
};
