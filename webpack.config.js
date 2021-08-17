const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports =
{
    devtool: "eval-source-map",
    entry: "./src/index.ts",
    module:
    {
        rules:
        [
            {
                test: /\.ts$/i,
                use: "ts-loader",
                include: [ path.resolve(__dirname, "src") ]
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve:
    {
        extensions: [ ".ts", ".js" ]
    },
    output:
    {
        publicPath: "public",
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    },
    devServer:
    {
        publicPath: "/",
        contentBase: "./public",
        watchContentBase: true,
        hot: true
    },
    plugins:
    [
        new CopyPlugin(
        {
            patterns:
            [
                {
                    from: "node_modules/@fortawesome/fontawesome-free/css/all.min.css",
                    to: "libraries/fontawesome/css/all.min.css"
                },
                {
                    from: "node_modules/@fortawesome/fontawesome-free/css/v4-shims.min.css",
                    to: "libraries/fontawesome/css/v4-shims.min.css"
                },
                {
                    from: "node_modules/@fortawesome/fontawesome-free/webfonts",
                    to: "libraries/fontawesome/webfonts"
                },
                {
                    from: "src/thumbnails",
                    to: "thumbnails"
                }
            ]
        }),
    ],
    mode: "development"
};
