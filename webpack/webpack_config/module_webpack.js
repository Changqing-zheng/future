const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const modules = {
    rules:[
        {
            test: /\.css$/,
            // use:['style-loader','css-loader']
            use:ExtractTextWebpackPlugin.extract({
                fallback: "style-loader",
                // use: "css-loader"
                use: [{
                    loader:"css-loader",
                    options:{importLoader:1}
                },'postcss-loader']
            })
        },
        {
            test: /\.(png|jpg|gif|jpeg)$/i,
            use: [
                {
                    loader: 'url-loader',
                    options:{
                        limit: 500,
                        outputPath: 'image/'
                    }
                }
            ]
        },
        {
            test: /\.(html|htm)$/i,
            loader: 'html-withimg-loader'
        },
        {
            test: /\.scss$/i,
            // use:["style-loader","css-loader","sass-loader"]
            use:ExtractTextWebpackPlugin.extract({
                fallback:"style-loader",
                use:[{
                    loader:"css-loader"
                },
                    {
                        loader:"sass-loader"
                    }],
            })
        },
        {
            test:/\.(jsx|js)$/i,
            use:{
                loader:'babel-loader',
                options:{
                    presets:[
                        "es2015"
                    ]
                }
            },
            exclude:/node_modules/
        }
    ]
};
module.exports = modules;