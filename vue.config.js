const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  filenameHashing: true ,

  devServer: {
    historyApiFallback: true
  }
})