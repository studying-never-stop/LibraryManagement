const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, //关闭eslint检查
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  },
})

module.exports = {
  configureWebpack: config => {
    config.plugins.push(AutoImport({
      resolvers: [ElementPlusResolver()],
    }))

    config.plugins.push(Components({
      resolvers: [ElementPlusResolver()],
    }))
  }
}