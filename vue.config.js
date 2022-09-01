const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: '',
    outputDir: 'dist',
    assetsDir: 'static',
    productionSourceMap: true,
    devServer: {
        proxy: {
            '/': {
                target: 'https://hiring.zumata.xyz/job01',
                changeOrigin: true
            },
        }
    },
    chainWebpack: config =>{
        config.plugin('html')
          .tap(args => {
              console.log(args);
            args[0].title = "Cloud Travel";
            return args;
          })
      }
})
