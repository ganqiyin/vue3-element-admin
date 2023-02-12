const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const ElementPlus = require("unplugin-element-plus/webpack");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        //https://cli.vuejs.org/zh/guide/css.html#css-modules
        additionalData: `@import "./src/styles/main.scss";`,
      },
    },
  },
  configureWebpack: {
    plugins: [
      ElementPlus(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
});
