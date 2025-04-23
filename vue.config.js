const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
<<<<<<< HEAD
  publicPath: './',

  filenameHashing: true ,
=======
  publicPath: '/',
  filenameHashing: true,
>>>>>>> 8c7585f7b04b3e5e3afd4070373343db74e5d82c
  devServer: {
    historyApiFallback: true
  }
})