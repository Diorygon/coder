const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    plugins:  [
        new MiniCssExtractPlugin(),
        new TerserPlugin({
        parallel: true,
        terserOptions: { ecma: 6},
    })],
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    },
    devServer:{
        contentBase: "./public"
    },
    optimization:{
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                //'style-loader', Adiciona CSS a DOM injetando a tag <style>
                MiniCssExtractPlugin.loader, 
                'css-loader',
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}