module.exports = {
    module: {
        loaders: [ //配置加载器
            {
                test: /\.(css|less)$/,
                loader: 'less-loader!style-loader!css-loader'
            },
        ]
    }
}