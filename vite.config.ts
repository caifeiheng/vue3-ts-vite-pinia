import { fileURLToPath, URL } from 'node:url'

import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import {createStyleImportPlugin,ElementPlusResolve,} from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig(({command,mode})=>{
  //获取各种环境下的变量
  let env = loadEnv(mode,process.cwd())
  return{
    publicPath :'./',
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        localEnabled:command === 'serve',
      }),
      createStyleImportPlugin({
        resolves: [ElementPlusResolve()],
        libs: [
          {
            libraryName: 'element-plus',
            esModule: true,
            resolveStyle: (name: string) => {
              return `element-plus/theme-chalk/${name}.css`
            },
          },
        ]
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: { 
          javascriptEnabled:true,
          additionalData: '@import "./src/styles/variable.scss";'
        }
      }
    },
    //代理跨域
    server:{
      proxy:{
        [env.VITE_APP_BASE_API]:{
          //获取数据的服务器地址设置
          target:env.VITE_SERVE,
          // 需要代理跨域
          changeOrigin:true,
          // 路径重写
          rewrite:(path)=>path.replace(/^\/api/,'')
        }
      }
    }
  }
})
