const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = defineConfig({
  transpileDependencies: false,
  lintOnSave: false,
  configureWebpack: config => {
    const plugins = []
    plugins.push(new NodePolyfillPlugin())
  }
})
