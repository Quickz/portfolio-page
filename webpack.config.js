const path = require("path");

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
    mode: "development"
};
