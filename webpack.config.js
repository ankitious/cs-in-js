const path = require("path");

const config = {
    entry: "./index.js",
    mode : "development",
    output: {
        path: path.join(__dirname + "/dist"),
        filename: "bundle.js"
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader',
                }
            }
        ]
    },
};

module.exports = config;
