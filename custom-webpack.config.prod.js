const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(config) {
    config.module.rules.push({
        test: /fonts\.(ts|js)$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'webfonts-loader',
        ]
    });
    config.plugins.push(
        new MiniCssExtractPlugin({ filename: "styles/[name].css" }),
    );
    return config;
}