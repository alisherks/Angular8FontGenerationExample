module.exports = function(config) {
    config.module.rules.push({
        test: /fonts\.(ts|js)$/,
        use: [
            'style-loader',
            'css-loader',
            'webfonts-loader',
        ]
    });
    return config;
}