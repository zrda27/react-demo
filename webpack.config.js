var webpack = require('webpack');

module.exports = {
    context: __dirname + "/demo",//指定entry的目录
    entry: {//指定要转码的文件
        form: "./form.jsx", //键可被output.filename中引用
        test: "./test.jsx"
    },
    output: {
        publicPath: "/build/", //指定发布到web时，资源的路径
        path: __dirname + "/public/build", //指定生成文件的路径
        filename: "[name].js", //指定生成文件的称
        sourceMapFileName: "[file].map", //指定生成的map文件名称
    },
    module: {
        loaders: [ //转码使用的处理器
            {
                test: /\.jsx?$/, //过滤文件
                loader: 'babel-loader',
                exclude: /node_module/, //排除的目录
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css', 'autoprefixer']
            }, {
                test: /\.less/,
                loaders: ['style', 'css', 'autoprefixer', 'less'],
            }, {
                test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
                loader: 'file-loader?name=[hash].[ext]'
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=1200&name=[hash].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'), //将公用模块，打包进common.js
        /*new webpack.optimize.UglifyJsPlugin({compress:{
         warnings: false
         }}),*/
        new webpack.HotModuleReplacementPlugin()
    ],
    /*resolve: { //指定require引入文件的查找
        extensions: ["", "js", "jsx"] //引入的文件不带后缀，会按照此配置去查找文件
    },*/
    //devtool: "#source-map", //生成map文件
    devServer: { //调试服务webpack-dev-server的配置参数
        contentBase: "./public",
        hot: true,
        inline: true,
        host: "0.0.0.0",
        port: 8080,
        quiet: true
    }
}
