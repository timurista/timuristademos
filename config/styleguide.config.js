{
    webpackConfig: {
        "module": {
            "loaders": [
                {
                    "exclude": /node_modules/,
                    "loader": "babel-loader",
                    "test": /\.jsx?$/
                }
            ]
        }
    }
}